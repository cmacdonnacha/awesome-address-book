import React from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

interface Props {
  text: string;
}

const Container = styled.div`
  height: 30px;
  background-color: ${colours.secondary};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colours.white};
`;

const Banner: React.FunctionComponent<Props> = (props: Props) => {
  return <Container>{props.text}</Container>;
};

export default Banner;
