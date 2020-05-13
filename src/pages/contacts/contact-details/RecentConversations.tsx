import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import Avatar from 'components/Avatar';
import { Contact } from 'models/Contact';
import userProfile from 'assets/user-profile.png';

interface Props {
  contact: Contact;
}

const MessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${colours.offWhite};
  min-height: 4rem;
  border-radius: 5px;
  padding: 15px 15px 15px 25px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colours.grey};
  }
`;

const InfoContainer = styled.div`
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

const Title = styled.span`
  color: ${colours.navy};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Timestamp = styled.span`
  color: ${colours.grey5};
  font-weight: bold;
  font-size: 0.8rem;
`;

const RecentConversations = ({ contact }: Props) => {
  return (
    <div>
      <MessageContainer>
        <Avatar alt="Contact Avatar" src={contact.avatarUrl} size={'3rem'} />
        <InfoContainer>
          <Title>{'Want to grab some lunch later? 🥗'}</Title>
          <Timestamp>12 minutes ago</Timestamp>
        </InfoContainer>
      </MessageContainer>

      <MessageContainer>
        <Avatar alt="My Avatar" src={userProfile} size={'3rem'} />
        <InfoContainer>
          <Title>{'Hey, did you get a chance to look over those designs?'}</Title>
          <Timestamp>1 day ago</Timestamp>
        </InfoContainer>
      </MessageContainer>

      <MessageContainer>
        <Avatar alt="Contact Avatar" src={contact.avatarUrl} size={'3rem'} />
        <InfoContainer>
          <Title>{'Howdy! Send me those designs and I will review them for you 😁'}</Title>
          <Timestamp>3 days ago</Timestamp>
        </InfoContainer>
      </MessageContainer>
    </div>
  );
};

export default RecentConversations;
