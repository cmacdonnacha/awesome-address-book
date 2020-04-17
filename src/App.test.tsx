import React from 'react';
import App from './App';
import { renderWithRouterRedux } from './utils/test-utils';
import { screen } from '@testing-library/react';

// test('should render Contacts page as default', () => {
//   // Arrange
//   renderWithRouterRedux(<App />, ['/']);

//   // Act
//   const element = screen.getByText('My Contacts');

//   // Assert
//   expect(element).toBeInTheDocument();
// });

test('should render Settings page when clicked', () => {
  // Arrange
  renderWithRouterRedux(<App />, ['/']);

  // Act
  screen.getByText('Settings').click();

  // Assert
  expect(screen.getByText('This is the settings page', { exact: false })).toBeInTheDocument();
});

// test('should render Contacts page when clicking away and back again', () => {
//   // Arrange
//   renderWithRouterRedux(<App />, ['/']);

//   // Act
//   screen.getByText('Settings').click();
//   screen.getByText('Contacts').click();

//   // Assert
//   expect(screen.getByText('My Contacts')).toBeInTheDocument();
// });
