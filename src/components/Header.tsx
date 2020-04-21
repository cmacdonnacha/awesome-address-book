/**
 * @component
 *
 * A header which appears at the top of the app's main layout
 *
 * @param {boolean} isSidebarOpen Tells us if the sidebar is currently open
 * @param {ReactNode} children The children of this button. Usually the text to be display.
 * @param {callback} onMenuButtonClicked Fires when the burger menu button is clicked
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import MenuButton from './MenuButton';
import { screenSize } from '../constants/screenSizes';
import { colours } from '../constants/colours';

interface Props {
  isSidebarOpen: boolean;
  onMenuButtonClicked: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.header`
  grid-area: header;
  background-color: #3a529c;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  margin-left: 2.5em;
  color: ${colours.white};

  @media (min-width: ${screenSize.medium}) {
    margin-left: 0.2em;
  }
`;

const Header: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container>
      <MenuButton isOpen={props.isSidebarOpen} onClick={props.onMenuButtonClicked} />
      <Title>{'📖 Awesome Address Book'}</Title>
    </Container>
  );
};

export default Header;
