/**
 * @component
 *
 * A generic button
 *
 * @param {number} size The height of the button
 * @param {ReactNode} children The children of this button. Usually the text to be display.
 * @param {callback} onClick Fires when the button is clicked
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

interface Props {
  size?: number;
  children?: React.ReactNode;
  onClick: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.button<Props>`
  font-size: 1rem;
  margin: 10px;
  border: none;
  border-radius: 3px;
  color: ${colours.white};
  background-color: ${colours.secondary};
  cursor: pointer;
  height: ${(props) => (props.size ? `${props.size}px` : '40px')};
`;

const Button: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container onClick={props.onClick} size={props.size}>
      {props.children}
    </Container>
  );
};

export default Button;
