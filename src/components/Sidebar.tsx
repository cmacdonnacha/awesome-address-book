/**
 * @component
 *
 * Displays a generic search bar
 *
 * @param {boolean} isSidebarOpen Tell us if the sidebar is currently open.
 * @param {callback} onLinkClicked Fires when the sidebar link is clicked.
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { colours } from 'constants/colours';
import { screenSize } from 'constants/screenSizes';
import { UserFriends as UserFriendsIcon } from '@styled-icons/fa-solid/UserFriends';
import { Settings2 as SettingsIcon } from '@styled-icons/evaicons-solid/Settings2';
import Avatar from './Avatar';
import userProfile from 'assets/user-profile.png';

interface Props {
  isSidebarOpen?: boolean;
  onLinkClicked?: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.nav<Props>`
  grid-area: sidebar;
  background-color: ${colours.grey};
  display: flex;
  flex-direction: column;
  min-width: 250px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  /* This style will trigger when the screen width is less than 640px (i.e tablet size) */
  @media (max-width: ${screenSize.medium}) {
    position: absolute;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${(props) => (props.isSidebarOpen ? '0' : '-100%')});
    min-width: 70%;
    z-index: 2;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  text-transform: capitalize;
  text-decoration: none;
  border-left: solid 5px ${colours.grey};
  color: ${colours.primary};
  font-size: 1.3rem;
  font-weight: bold;

  /* Decrease the font size when the screen width is less than 640px (i.e tablet size) */
  @media (min-width: ${screenSize.medium}) {
    font-size: 1rem;
  }

  &.active {
    background-color: white;
    border-left: solid 5px ${colours.secondary};
  }

  /* List Item Icon */
  svg {
    height: 1em;
    width: 1em;
    margin-right: 1rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colours.primary};
  color: ${colours.grey};
`;

const Username = styled.span`
  margin-top: 10px;
  font-size: 1rem;
`;

const Sidebar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container isSidebarOpen={props.isSidebarOpen}>
      <ProfileContainer>
        <Avatar alt={'User Profile Image'} src={userProfile} size={'6rem'} />
        <Username>Cathal Mac Donnacha</Username>
      </ProfileContainer>
      <SidebarList>
        <li>
          <StyledNavLink to="/contacts" onClick={props.onLinkClicked}>
            <UserFriendsIcon />
            Contacts
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={props.onLinkClicked}>
            <SettingsIcon />
            Settings
          </StyledNavLink>
        </li>
      </SidebarList>
    </Container>
  );
};

export default Sidebar;
