import React from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  padding: 20px;

  & h1 {
    margin: 0;
    color: ${colours.navy};
  }
`;

const Content = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  height: 100%;
`;

interface Props {
  heading: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Page: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container>
      <h1>{props.heading}</h1>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Page;
