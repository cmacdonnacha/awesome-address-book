/**
 * @component
 *
 * Displays a rectangle banner
 *
 * @param {string} text The text to display on the banner
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  text: string;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.div`
  height: 60px;
  background-color: ${colours.secondary};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colours.white};
`;

const Banner = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

export default Banner;
