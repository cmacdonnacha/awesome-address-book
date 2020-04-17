import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../slices/contactsSlice';
import Page from '../../components/Page';
import ContactsList from './ContactsList';

const Contacts: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Page heading="Contacts">
      <ContactsList />
    </Page>
  );
};

export default Contacts;
