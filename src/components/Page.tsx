/**
 * @component
 *
 * A generic Page component used on each route. This applies some basic styling so that it can be easily re-used.
 *
 * @param {string} heading The heading title of the page
 * @param {ReactNode} children The children inside the page
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

interface Props {
  heading: string;
  children?: React.ReactNode;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  overflow: hidden;

  & h1 {
    margin: 0 0 20px 0;
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

const Page: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Container>
      <h1>{props.heading}</h1>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Page;
