import React from 'react';
import styled from 'styled-components/macro';
import { Contact } from '../../slices/contactsSlice';
import Modal from '../../components/Modal';
import { colours } from '../../constants/colours';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import { HomeCircle as HomeCircleIcon } from '@styled-icons/boxicons-solid/HomeCircle';
import { Phone as PhoneIcon } from '@styled-icons/boxicons-solid/Phone';

interface Props {
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
}

const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: ${colours.primary};
  color: ${colours.white};
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const ContactName = styled.span`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const Body = styled.main`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: ${colours.white};
  color: #0000008a;
  padding: 15px;
  font-size: 1rem;
  align-items: flex-start;
  overflow-y: auto;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colours.white};
  justify-content: center;
`;

const AddressGridContainer = styled.section`
  /* 4 rows x 2 columns */
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 0.2fr 2fr;
  grid-gap: 2px;
  width: 100%;
  margin-bottom: 25px;
`;

const PhoneGridContainer = styled.section`
  /* 2 rows x 2 columns */
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 0.2fr 2fr;
  grid-gap: 2px;
  width: 100%;
`;

const Label = styled.span`
  grid-column: 2;
  text-align: left;
`;

const ContactDetailsModal: React.FunctionComponent<Props> = (props: Props) => {
  if (!props.isOpen || !props.contact) {
    return null;
  }

  return (
    <Modal isOpen={props.isOpen}>
      <ContactDetailsContainer>
        <Header>
          <Avatar src={props.contact.avatarUrl} size={'6rem'} />
          <ContactName>
            {props.contact.name.first} {props.contact.name.last}
          </ContactName>
        </Header>

        <Body>
          <AddressGridContainer>
            <HomeCircleIcon size={20} />
            <Label>{props.contact.location.street},</Label>
            <Label>{props.contact.location.city},</Label>
            <Label>{props.contact.location.state},</Label>
            <Label>{props.contact.location.postcode}</Label>
          </AddressGridContainer>

          <PhoneGridContainer>
            <PhoneIcon size={20} />
            <Label>{props.contact.phone}</Label>
            <Label>{props.contact.cell}</Label>
          </PhoneGridContainer>
        </Body>

        <Footer>
          <Button onClick={props.onClose} label="close modal please">
            Close
          </Button>
        </Footer>
      </ContactDetailsContainer>
    </Modal>
  );
};

export default ContactDetailsModal;
