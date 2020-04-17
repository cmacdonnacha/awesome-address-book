import React from 'react';
import styled from 'styled-components/macro';
import { Contact, contactsSelector } from '../../slices/contactsSlice';
import { useSelector } from 'react-redux';
import ContactsListItem from './ContactListItem';
import Loader from '../../components/Loader';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  list-style: none;
  padding: 0;
`;

const ContactsList: React.FunctionComponent = () => {
  const { contacts, isLoading, hasErrors } = useSelector(contactsSelector);

  const renderContacts = () => {
    if (isLoading && contacts.length === 0) {
      return <Loader text={'Making contacts...'} />;
    }

    if (hasErrors || (!isLoading && contacts.length === 0)) {
      return <span>{"Couldn't find contacts 😥"}</span>;
    }

    return contacts.map((contact: Contact) => (
      <li key={contact.id}>
        <ContactsListItem contact={contact} />
      </li>
    ));
  };

  return <List>{renderContacts()}</List>;
};

export default ContactsList;
