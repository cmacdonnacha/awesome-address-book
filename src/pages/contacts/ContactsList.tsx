import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Contact, contactsSelector, fetchContacts } from '../../slices/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from './ContactListItem';
import Loader from '../../components/Loader';
import { MAX_FETCH_BATCH_SIZE, MAX_TOTAL_CONTACTS } from '../../constants';
import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import ContactDetailsModal from './ContactDetailsModal';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;

const ContactsList: React.FunctionComponent = () => {
  const { contacts, isLoading, hasErrors } = useSelector(contactsSelector);
  const contactsListRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();
  const [numContactsToDisplay, setNumContactsToDisplay] = useState<number>(MAX_FETCH_BATCH_SIZE);
  const [contactSearchText, setContactSearchText] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Load the initial users
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  useEffect(() => {
    // Don't fetch any more users if we've already reached the max allowed.
    if (numContactsToDisplay >= MAX_TOTAL_CONTACTS) {
      return;
    }

    // We always want to pre-fetch more contacts to give a better user experience.
    // numContactsToDisplay is updated each time the user scrolls to bottom, this will
    // dispatch fetchContacts() meaning 'contacts.length' will always be greater than numContactsToDisplay
    // until we have reached the MAX_TOTAL_CONTACTS.
    // For example we may have 100 contacts but only displaying 50. When the user scrolls to bottom we can then quickly display 100 and fetch more.
    if (contacts.length === numContactsToDisplay) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length, numContactsToDisplay]);

  // Handles the scroll updates
  useEffect(() => {
    // A reference to the contacts list
    const { current } = contactsListRef;
    if (!current) {
      return;
    }

    const handleScroll = () => {
      // Check if the user has scrolled to the bottom
      if (current.offsetHeight + current.scrollTop !== current.scrollHeight) {
        return;
      }

      // Don't bother updating 'numContactsToDisplay' since we've already reached the max number of contacts to display.
      if (numContactsToDisplay >= MAX_TOTAL_CONTACTS) {
        return;
      }

      // User has scrolled to bottom so update 'numContactsToDisplay' which will tell our app that we can pre-fetch more.
      setNumContactsToDisplay(numContactsToDisplay + MAX_FETCH_BATCH_SIZE);
    };

    // Subscribe to the scroll event
    current.addEventListener('scroll', handleScroll);

    // Unsubscribe to the scroll event. Returning a function here tells React to perform a cleanup.
    return () => current.removeEventListener('scroll', handleScroll);
  }, [contactsListRef, numContactsToDisplay]);

  const openModal = (contact: Contact) => {
    setSelectedContact(contact);
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(!isModalOpen);
    setSelectedContact(null);
  };

  const renderContacts = () => {
    if (isLoading && contacts.length === 0) {
      return (
        <CenteredContainer>
          <Loader text={'Loading contacts...'} />
        </CenteredContainer>
      );
    }

    if (hasErrors || (!isLoading && contacts.length === 0)) {
      return (
        <CenteredContainer>
          <span>{"Couldn't find contacts 😥"}</span>
        </CenteredContainer>
      );
    }

    // Search for users by first or last name
    const searchedContacts = contacts.filter((contact) => {
      const contactFullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();
      return contactFullName.includes(contactSearchText.toLowerCase());
    });

    return searchedContacts.map((contact: Contact, index: number) => {
      // Only render the list items that we are allowed to display.
      // Otherwise, since we are pre-fetching, it would display ALL the available contacts.
      if (index >= numContactsToDisplay) {
        return null;
      }

      return (
        <li key={contact.id}>
          <ContactsListItem contact={contact} onClick={() => openModal(contact)} />
        </li>
      );
    });
  };

  return (
    <Container>
      <span>Contacts length: {contacts.length}</span>
      <span>Actually displayed: {contactsListRef?.current?.children?.length}</span>
      <span>numContactsToDisplay: {numContactsToDisplay}</span>

      <SearchBar
        placeholder={'Search...'}
        onSearchTextChanged={(text: string) => {
          setContactSearchText(text);
        }}
      />
      <List ref={contactsListRef}>
        {renderContacts()}

        {/* Display a banner to tell the user we have reached the end of the list */}
        {numContactsToDisplay >= MAX_TOTAL_CONTACTS && (
          <li>
            <Banner text="End of users catalog" />
          </li>
        )}
      </List>

      <ContactDetailsModal isOpen={isModalOpen} onClose={closeModal} contact={selectedContact} />
    </Container>
  );
};

export default ContactsList;
