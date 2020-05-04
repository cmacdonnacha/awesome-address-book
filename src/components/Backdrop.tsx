/**
 * @component
 *
 * Displays a darkened backdrop which overlays over the entire app.
 *
 * @param {callback} onClick Event fires when the backdrop is clicked.
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  onClick: () => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Backdrop = ({ onClick }: Props) => {
  return <Container onClick={onClick} />;
};

export default Backdrop;
