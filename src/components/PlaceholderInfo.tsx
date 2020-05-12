import React from 'react';
import styled from 'styled-components/macro';
import { StyledIcon } from '@styled-icons/styled-icon';

interface Props {
  icon: string | StyledIcon;
  text: string;
}

const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PlaceholderIcon = styled.span`
  margin-bottom: 20px;
  font-size: 3rem;
`;

const PlaceholderText = styled.span`
  font-size: 1.2rem;
`;

const PlaceholderInfo = ({ icon, text }: Props) => {
  return (
    <PlaceholderContainer>
      <PlaceholderIcon>{icon}</PlaceholderIcon>
      <PlaceholderText>{text}</PlaceholderText>
    </PlaceholderContainer>
  );
};

export default PlaceholderInfo;
