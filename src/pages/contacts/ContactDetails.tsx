import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, contactDetailsClosed } from 'slices/contactsSlice';
import { ArrowIosBackOutline as BackIcon } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { Chat as ChatIcon } from '@styled-icons/heroicons-solid/Chat';
import { Mobile as MobileIcon } from '@styled-icons/entypo/Mobile';
import { Home as HomeIcon } from '@styled-icons/entypo/Home';
import { Envelope as EmailIcon } from '@styled-icons/boxicons-solid/Envelope';
import { screenSize } from 'constants/screenSizes';
import { colours } from 'constants/colours';
import Avatar from 'components/Avatar';
import { Contact } from 'models/Contact';
import Button from 'components/Button';

interface RouterProps {
  match: {
    params: { id: string };
  };
}

const MainContainer = styled.div`
  overflow-y: auto;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  padding: 20px 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const UserStatus = styled.span`
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${colours.green};
  margin-left: 10px;
`;

const BackButton = styled.button`
  text-align: start;
  background: none;
  border: none;
  cursor: pointer;
  min-height: 50px;
  outline: none;
  margin-left: 10px;

  @media (min-width: ${screenSize.medium}) {
    display: none;
  }
`;

const ContactName = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 5px 0;
`;

const ContactCountry = styled.span`
  margin-bottom: 12px;
`;

const Divider = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background: #eaedf3;
  background: ${colours.grey};
`;

const Section = styled.section`
  flex-direction: column;

  & p {
    color: ${colours.grey4};
    font-size: 1rem;
  }
`;

const SectionHeader = styled.h3`
  color: ${colours.grey4};
  margin-bottom: 20px;
`;

const ContactDetailsContainer = styled.div`
  flex-direction: column;
  color: ${colours.grey4};

  & svg {
    min-width: 1.5rem;
  }
`;

const ContactDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const ContactDetailLabel = styled.span`
  margin-left: 10px;
  min-width: 100px;
`;

const ContactDetailValue = styled.span`
  word-break: break-word;
`;

const ContactDetails = ({ match }: RouterProps) => {
  const { contacts } = useSelector(contactsSelector);
  const selectedContact: Contact = contacts.find((contact: Contact) => contact.id === match.params.id) || contacts[0];
  const dispatch = useDispatch();

  if (contacts.length === 0) {
    return (
      <DetailsContainer>
        <span>Loading...</span>
      </DetailsContainer>
    );
  }

  return (
    <MainContainer>
      <BackButton onClick={() => dispatch(contactDetailsClosed())}>
        <BackIcon size={30} />
      </BackButton>

      <DetailsContainer>
        <Header>
          <Avatar src={selectedContact.avatarUrl} size={'8rem'} />

          <HeaderDetails>
            <Column>
              <ContactName>
                {selectedContact.name.first} {selectedContact.name.last}
                <UserStatus />
              </ContactName>
              <ContactCountry>{selectedContact.location.country}</ContactCountry>
            </Column>

            <Row>
              <Button>
                <ChatIcon size={18} />
                Chat
              </Button>
            </Row>
          </HeaderDetails>
        </Header>

        <Divider />

        <Section>
          <SectionHeader>BIO</SectionHeader>
          <p>
            {
              "I like romantic comedies and long walks on the beach 🌴 I'm a Professional procrastinator. Shout-out to my Mom's friends who like and share all my pictures."
            }
          </p>
        </Section>

        <Divider />

        <Section>
          <SectionHeader>Contact Details</SectionHeader>
          <ContactDetailsContainer>
            <ContactDetailRow>
              <HomeIcon size={20} />
              <ContactDetailLabel>Mobile:</ContactDetailLabel>
              <ContactDetailValue>{selectedContact.cell}</ContactDetailValue>
            </ContactDetailRow>

            <ContactDetailRow>
              <MobileIcon size={20} />

              <ContactDetailLabel>Work:</ContactDetailLabel>
              <ContactDetailValue>{selectedContact.phone}</ContactDetailValue>
            </ContactDetailRow>

            <ContactDetailRow>
              <EmailIcon size={20} />

              <ContactDetailLabel>Email:</ContactDetailLabel>
              <ContactDetailValue>{selectedContact.email}</ContactDetailValue>
            </ContactDetailRow>
          </ContactDetailsContainer>
        </Section>

        <Divider />
      </DetailsContainer>
    </MainContainer>
  );
};

export default ContactDetails;
