import React from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

interface Props {
  label?: string;
  size?: number;
  children?: React.ReactNode;
  onClick: () => void;
}

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
