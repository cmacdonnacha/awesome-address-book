/**
 * @component
 *
 * This component handles all of the different routes to render depending on the current url
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import ContactsPage from '../pages/contacts/ContactsPage';
import SettingsPage from '../pages/settings/SettingsPage';

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.main`
  grid-area: content;
  display: flex;
  flex: 1;
  margin: 10px;
  overflow-y: hidden;
`;

const Routes: React.FunctionComponent = () => {
  return (
    <Container>
      {/*
        A <Switch> looks through all its children <Route> elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time you have multiple routes, but you want only one
        of them to render at a time. Once it finds the url, the route is rendered while the rest are ignored. 
      */}
      <Switch>
        {/* 
          'exact' is used here because '<Route path>' will always match the beginning of the URL, not the whole thing.
          So a <Route path="/"> will always match the URL, no matter what it is. Because of this, we typically put this <Route> last in our <Switch>. 
          Another possible solution is to use <Route exact path="/"> which DOES match the entire URL.
        */}
        <Route exact path="/">
          <ContactsPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
