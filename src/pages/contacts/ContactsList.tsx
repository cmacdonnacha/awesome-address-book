import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Contact, contactsSelector, fetchContacts } from '../../slices/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from './ContactListItem';
import Loader from '../../components/Loader';
import { MAX_FETCH_BATCH_SIZE, MAX_TOTAL_CONTACTS } from '../../constants';
import Banner from '../../components/Banner';

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

// TODO: REMOVE THIS
const TempDiv = styled.ul`
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
  const [numContactsToDisplay, setNumContactsToDisplay] = useState(MAX_FETCH_BATCH_SIZE);

  // Load the initial users
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

    return contacts.map((contact: Contact, index: number) => {
      // Only render the list items that we are allowed to display.
      // Otherwise, since we are pre-fetching, it would display ALL the available contacts.
      if (index >= numContactsToDisplay) {
        return null;
      }

      return (
        <li key={contact.id}>
          <ContactsListItem contact={contact} />
        </li>
      );
    });
  };

  return (
    <TempDiv>
      <span>Contacts length: {contacts.length}</span>
      <span>Actually displayed: {contactsListRef.current?.children.length}</span>
      <span>numContactsToDisplay: {numContactsToDisplay}</span>

      <List ref={contactsListRef}>
        {renderContacts()}

        {/* Display a banner tells the user we have reached the end of the list */}
        {numContactsToDisplay >= MAX_TOTAL_CONTACTS && (
          <li>
            <Banner text="End of users catalog" />
          </li>
        )}
      </List>
    </TempDiv>
  );
};

export default ContactsList;
