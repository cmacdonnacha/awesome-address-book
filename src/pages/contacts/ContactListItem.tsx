import React from 'react';
import styled from 'styled-components/macro';
import { Contact } from '../../slices/contactsSlice';
import { colours } from '../../constants/colours';
import Avatar from '../../components/Avatar';

interface Props {
  contact: Contact;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${colours.grey};
  margin: 10px 0;
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
`;

const ContactsDetailsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

const ContactName = styled.span`
  display: flex;
  flex-direction: column;
  color: ${colours.navy};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ContactUsername = styled.span`
  display: flex;
  flex-direction: column;
  color: ${colours.navy};
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const ContactEmail = styled.span`
  display: flex;
  flex-direction: column;
  color: ${colours.navy};
  font-weight: bold;
  font-size: 0.8rem;
`;

const ContactListItem: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container>
      <Avatar src={props.contact.avatarUrl} size={'5rem'} />
      <ContactsDetailsContainer>
        <ContactName>
          {props.contact.name.first} {props.contact.name.last}
        </ContactName>
        <ContactUsername>{props.contact.username}</ContactUsername>
        <ContactEmail>{props.contact.email}</ContactEmail>
      </ContactsDetailsContainer>
    </Container>
  );
};

export default ContactListItem;
