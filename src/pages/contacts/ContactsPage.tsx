import React, { useEffect } from 'react';
import Page from 'components/Page';
import ContactsList from './contacts-list/ContactsList';
import styled from 'styled-components/macro';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, fetchContacts } from 'slices/contactsSlice';
import { screenSize } from 'constants/screenSizes';
import ContactDetails from './contact-details/ContactDetails';
import { colours } from 'constants/colours';
import Loader from 'components/Loader';
import PlaceholderInfo from 'components/PlaceholderInfo';

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

const ContactsPage: React.FunctionComponent = () => {
  const { contacts, isContactDetailsOpen, isLoading, hasErrors } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load the initial users but only if we don't already have any.
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  const renderPageContent = () => {
    if (isLoading) {
      return <Loader text={'Loading contacts...'} />;
    }

    if (hasErrors) {
      return <PlaceholderInfo icon={'🤷‍♂️'} text={'Something went wrong'} />;
    }

    if (!isLoading && contacts.length === 0) {
      return <PlaceholderInfo icon={'😢‍'} text={'No contacts found'} />;
    }

    return (
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
    );
  };
  return (
    <Page noPadding>
      <PageHeading>Contacts</PageHeading>
      {renderPageContent()}
    </Page>
  );
};

export default ContactsPage;
