/**
 * @component
 *
 * Displays contacts in a scrollable, infinite list.
 *
 */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { contactsSelector, fetchContacts, setSearchText, contactDetailsOpened } from 'slices/contactsSlice';
import { Contact } from 'models/Contact';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListItem from './ContactListItem';
import Loader from 'components/Loader';
import { MAX_FETCH_BATCH_SIZE, MAX_TOTAL_CONTACTS } from '../../constants';
import Banner from 'components/Banner';
import SearchBar from 'components/SearchBar';
import { Link } from 'react-router-dom';

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.div`
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

const ListItem = styled.li`
  margin: 10px 20px;
`;

const ContactsList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [numContactsToDisplay, setNumContactsToDisplay] = useState<number>(MAX_FETCH_BATCH_SIZE);

  // Use object destructuring to get what we need from the contacts state.
  const { contacts, isLoading, hasErrors, searchText } = useSelector(contactsSelector);

  // A reference to the contacts list element so we can use it to attach a scroll event handler.
  const contactsListRef = useRef<HTMLUListElement>(null);

  /**
   * If search text has been entered then filter them.
   * User can search by first name, last name or both.
   */
  const searchedContacts = contacts.filter((contact) => {
    const contactFullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();
    return contactFullName.includes(searchText.toLowerCase());
  });

  // Load the initial users but only if we don't already have any.
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

    /**
     * We always want to pre-fetch more contacts to give a better user experience.
     * numContactsToDisplay is updated each time the user scrolls to bottom, this will
     * dispatch fetchContacts() meaning 'contacts.length' will always be greater than
     * numContactsToDisplay until we have reached the MAX_TOTAL_CONTACTS.
     *
     * For example we may have 100 contacts but only displaying 50. When the user scrolls to bottom we can then quickly display 100 and fetch more.
     *
     * You will notice the fetchContacts() will be initially fired twice, once to fetch and display the first 50 contacts, and once more to pre-fetch the next batch of 50.
     */
    if (contacts.length === numContactsToDisplay) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length, numContactsToDisplay]);

  // Handles the scroll updates inside a useEffect
  useEffect(() => {
    // A reference to the contacts list so we can use it to attach a scroll event handler.
    const { current } = contactsListRef;

    if (!current) {
      return;
    }

    /**
     * Tracks the current scroll position so that we can detect if the user has scrolled to bottom.
     */
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

  /**
   * Renders the appropriate component depending on the state of the app.
   */
  const renderContacts = () => {
    /**
     * Contacts list is loading so display a friendly message to the user.
     * Only do this if contacts.length === 0, otherwise it will be displayed when we pre-fetch contacts.
     */
    if (isLoading && searchedContacts.length === 0) {
      return (
        <CenteredContainer>
          <Loader text={'Loading contacts...'} />
        </CenteredContainer>
      );
    }

    /**
     * Display a friendly error message to the user if something went wrong during the contacts fetch or
     * loading has finished but no contacts were returned.
     */
    if (hasErrors || (!isLoading && searchedContacts.length === 0)) {
      return (
        <CenteredContainer>
          <span>{'No contacts found 😥'}</span>
        </CenteredContainer>
      );
    }

    const onContactClicked = () => {
      dispatch(contactDetailsOpened());
    };

    /**
     * Finally iterate through each contact and display them as list items.
     */
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

  /**
   * Update the state every time the search text changes. This allows us to persist the search when the user flicks between routes.
   *
   * @param {string} text The current search text
   */
  const onSearchTextChanged = (text: string) => {
    dispatch(setSearchText(text));
  };

  return (
    <Container>
      <SearchBar value={searchText} placeholder={'Search...'} onSearchTextChanged={onSearchTextChanged} ariaLabel={'Search for contacts'} />
      <List ref={contactsListRef}>
        {renderContacts()}

        {/* Display a banner to tell the user we have reached the end of the list */}
        {numContactsToDisplay >= MAX_TOTAL_CONTACTS && (
          <li>
            <Banner text="End of users catalog" />
          </li>
        )}
      </List>
    </Container>
  );
};

export default ContactsList;