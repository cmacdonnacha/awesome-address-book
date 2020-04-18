import React from 'react';
import Page from '../../components/Page';
import ContactsList from './ContactsList';

const Contacts: React.FunctionComponent = () => {
  return (
    <Page heading="Contacts">
      <ContactsList />
    </Page>
  );
};

export default Contacts;
