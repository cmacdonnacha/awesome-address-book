import React from 'react';
import styled from 'styled-components/macro';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { Chat as ChatIcon } from '@styled-icons/heroicons-solid/Chat';
import { Contact } from 'models/Contact';
import { colours } from 'constants/colours';

interface Props {
  contact: Contact;
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
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

const UserStatus = styled.span`
  display: block;
  min-width: 6px;
  min-height: 6px;
  border-radius: 50%;
  background-color: ${colours.green};
  margin-left: 10px;
`;

const ContactDetailsHeader = ({ contact }: Props) => {
  return (
    <Header>
      <Avatar src={contact.avatarUrl} size={'8rem'} alt="Contact Profile Image" />

      <HeaderDetails>
        <Column>
          <ContactName>
            {contact.name.first} {contact.name.last}
            <UserStatus title="Online" />
          </ContactName>
          <ContactCountry>{contact.location.country}</ContactCountry>
        </Column>

        <Row>
          <Button>
            <ChatIcon size={18} />
            Chat
          </Button>
        </Row>
      </HeaderDetails>
    </Header>
  );
};

export default ContactDetailsHeader;
