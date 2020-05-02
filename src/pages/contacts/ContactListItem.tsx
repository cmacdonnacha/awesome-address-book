/**
 * @component
 *
 * This component displays a contact as a list item with some additional styling.
 *
 * @param {Contact} contact The contact to display
 * @param {callback} onClick Fires when list item is clicked
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Contact } from 'models/Contact';
import { colours } from 'constants/colours';
import Avatar from 'components/Avatar';

interface Props {
  contact: Contact;
  onClick?: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${colours.grey};
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
  cursor: pointer;
  box-shadow: 0 11px 13px -6px rgba(135, 142, 192, 0.15);
  transition: 0.2s;

  &:hover {
    background-color: ${colours.grey2};
    box-shadow: 0 7px 18px 4px rgba(135, 142, 192, 0.15);
  }
`;

const ContactsDetailsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;

  /* When dealing with FlexBox and text overflow, you must set min-width of the parent to 0 */
  min-width: 0;

  /* Display ellipsis (...) at the end of long text */
  & span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ContactName = styled.span`
  color: ${colours.navy};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ContactUsername = styled.span`
  color: ${colours.navy};
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

const ContactEmail = styled.span`
  color: ${colours.navy};
  font-weight: bold;
  font-size: 0.8rem;
`;

const ContactListItem: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container onClick={props.onClick}>
      <Avatar alt="Contact Avatar" src={props.contact.avatarUrl} size={'5rem'} />
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
