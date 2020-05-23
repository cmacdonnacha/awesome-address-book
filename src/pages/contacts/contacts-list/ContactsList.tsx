import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { contactsSelector, fetchContacts, searchTextUpdated, contactDetailsOpened, searchedContactsSelector } from 'slices/contactsSlice';
import { Contact } from 'models/Contact';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from './ContactListItem';
import { MAX_FETCH_BATCH_SIZE, MAX_TOTAL_CONTACTS } from '../../../constants';
import Banner from 'components/Banner';
import SearchBar from 'components/SearchBar';
import { Link } from 'react-router-dom';
import { useHasScrolledToBottom } from 'hooks/useHasScrolledToBottom';
import PlaceholderInfo from 'components/PlaceholderInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`;

const ListItem = styled.li`
  margin: 10px 20px;
`;

const ContactsList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [numContactsToDisplay, setNumContactsToDisplay] = useState<number>(MAX_FETCH_BATCH_SIZE);

  // Use object destructuring to get what we need from the contacts state.
  const { contacts, isLoading, hasErrors, searchText } = useSelector(contactsSelector);
  const searchedContacts = useSelector(searchedContactsSelector);

  // A reference to the contacts list element so we can use it to attach a scroll event handler.
  const contactsListRef = useRef<HTMLUListElement>(null);
  const { current } = contactsListRef;
  const hasScrolledToBottom = useHasScrolledToBottom(current);

  // Handle fetching more users
  useEffect(() => {
    // Don't fetch any more users if we've already reached the max allowed.
    if (numContactsToDisplay >= MAX_TOTAL_CONTACTS) {
      return;
    }
    /**
     * We always want to pre-fetch more contacts to give a better user experience.
     * numContactsToDisplay is updated each time the user scrolls to bottom, this will
     * dispatch fetchContacts() meaning 'contacts.length' will always be greater than
     * numContactsToDisplay until we have reached the MAX_TOTAL_CONTACTS.
     *
     * For example we may have 100 contacts but only displaying 50. When the user scrolls to bottom we can then quickly display 100 and fetch more.
     *
     * You will notice the fetchContacts() action will be initially fired twice, once to fetch and display the first 50 contacts, and once more to pre-fetch the next batch of 50.
     */
    if (contacts.length === numContactsToDisplay) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length, numContactsToDisplay]);

  // Handle scrolling to bottom
  useEffect(() => {
    if (hasScrolledToBottom) {
      // Pass a function so that useEffect doesn't require numContactsToDisplay as a dependency. When this function runs it passes the current state 'numContactsToDisplay' as the first argument.
      setNumContactsToDisplay((prevNumContactsToDisplay) => prevNumContactsToDisplay + MAX_FETCH_BATCH_SIZE);
    }
  }, [hasScrolledToBottom]);

  const renderContacts = () => {
    if ((isLoading && contacts.length === 0) || hasErrors) {
      return null;
    }

    if (searchedContacts.length === 0) {
      return <PlaceholderInfo icon={'😢‍'} text={'No contacts found'} />;
    }

    const onContactClicked = () => {
      dispatch(contactDetailsOpened());
    };

    // Iterate through each contact and display them as list items.
    return searchedContacts.map((contact: Contact, index: number) => {
      /**
       * Only render the list items that we are allowed to display.
       * Otherwise, since we are pre-fetching, it would display ALL the available contacts.
       *
       * If the current index of the contact list item is great than numContactsToDisplay (max we are allowed to display)
       * then don't display it.
       */
      if (index >= numContactsToDisplay) {
        return null;
      }

      /**
       * Otherwise we are allowed to render the contact list item
       */
      return (
        <Link key={contact.id} to={`/contacts/${contact.id}`} style={{ textDecoration: 'none' }}>
          <ListItem>
            <ContactsListItem contact={contact} onClick={onContactClicked} />
          </ListItem>
        </Link>
      );
    });
  };

  const onSearchTextChanged = (text: string) => {
    dispatch(searchTextUpdated(text));
  };

  return (
    <Container>
      <SearchBar onSearchTextChanged={onSearchTextChanged} aria-label={'Search for contacts'} type={'search'} placeholder={'Search...'} />
      <List ref={contactsListRef}>
        {renderContacts()}

        {/* Display a banner to tell the user we have reached the end of the list */}
        {numContactsToDisplay >= MAX_TOTAL_CONTACTS && (
          <li>
            <Banner text="No more contacts 🤷‍‍" />
          </li>
        )}
      </List>
    </Container>
  );
};

export default ContactsList;
