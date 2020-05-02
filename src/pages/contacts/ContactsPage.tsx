/**
 * @component
 *
 * This component displays the Contacts page route
 *
 */
import React from 'react';
import Page from 'components/Page';
import ContactsList from './ContactsList';
import styled from 'styled-components/macro';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'slices/contactsSlice';
import { screenSize } from 'constants/screenSizes';
import ContactDetails from './ContactDetails';
import { colours } from 'constants/colours';

interface Props {
  isContactDetailsOpen: boolean;
}

const PageHeading = styled.h1`
  margin: 20px;
  color: ${colours.navy};
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div<Props>`
  display: flex;

  @media (max-width: ${screenSize.medium}) {
    transition: all 0.6s;
    transform: translateX(${(props) => (props.isContactDetailsOpen ? '-100%' : '0')});
    min-width: 100%;
  }
`;

// Inherit styles from ContentContainer
const ContactsListContainer = styled(ContentContainer)`
  min-width: 400px;
  max-width: 500px;
  flex: 1;
`;

// Inherit styles from ContentContainer
const ContactsDetailsContainer = styled(ContentContainer)`
  flex: 2;
`;

const Contacts: React.FunctionComponent = () => {
  const { contacts, isContactDetailsOpen } = useSelector(contactsSelector);

  return (
    <Page noPadding>
      <PageHeading>Contacts</PageHeading>
      <RowContainer>
        <ContactsListContainer isContactDetailsOpen={isContactDetailsOpen}>
          <ContactsList />
        </ContactsListContainer>

        <ContactsDetailsContainer isContactDetailsOpen={isContactDetailsOpen}>
          <Switch>
            <Route path="/contacts/:id" component={ContactDetails} />

            {/* Select the first contact by default */}
            {contacts.length > 0 && <Redirect to={`/contacts/${contacts[0].id}`} />}
          </Switch>
        </ContactsDetailsContainer>
      </RowContainer>
    </Page>
  );
};

export default Contacts;
