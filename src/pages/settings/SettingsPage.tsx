import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import NationalitiesSelector from './NationalitiesSelector';

const Greeting = styled.p`
  display: flex;
  background-color: white;
  justify-content: center;
`;

const SettingsPage: React.FunctionComponent = () => {
  return (
    <Page heading="Settings">
      <Greeting>Select nationalities to be included in your address book:</Greeting>

      <NationalitiesSelector />
    </Page>
  );
};

export default SettingsPage;
