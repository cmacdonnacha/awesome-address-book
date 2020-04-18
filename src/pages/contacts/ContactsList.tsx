import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Contact, contactsSelector } from '../../slices/contactsSlice';
import { useSelector } from 'react-redux';
import ContactsListItem from './ContactListItem';
import Loader from '../../components/Loader';

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

      // User has scrolled to bottom to display more contacts
      alert('reached bottom');
    };

    // Subscribe to the scroll event
    current.addEventListener('scroll', handleScroll);

    // Unsubscribe to the scroll event. Returning a function here tells React to perform a cleanup.
    return () => current.removeEventListener('scroll', handleScroll);
  }, [contactsListRef]);

  const renderContacts = () => {
    if (isLoading && contacts.length === 0) {
      return (
        <CenteredContainer>
          <Loader text={'Making contacts...'} />
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

    return contacts.map((contact: Contact) => (
      <li key={contact.id}>
        <ContactsListItem contact={contact} />
      </li>
    ));
  };

  return <List ref={contactsListRef}>{renderContacts()}</List>;
};

export default ContactsList;
