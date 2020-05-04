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
import { colours } from 'constants/colours';

interface Props {
  size?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  color: ${colours.white};
  background-color: ${colours.secondary};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  height: ${(props) => (props.size ? `${props.size}px` : '40px')};
  padding: 0 10px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08);
  }

  & svg {
    margin-right: 5px;
  }
`;

const Button = ({ size, children, onClick }: Props) => {
  return (
    <Container onClick={onClick} size={size}>
      {children}
    </Container>
  );
};

export default Button;
