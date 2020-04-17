import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';

const Greeting = styled.p`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const SettingsPage: React.FunctionComponent = () => {
  return (
    <Page heading="Settings">
      <Greeting>This is the settings page</Greeting>
    </Page>
  );
};

export default SettingsPage;
