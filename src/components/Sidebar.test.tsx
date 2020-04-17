import React from 'react';
import Sidebar from './Sidebar';
import { renderWithRouterRedux } from '../utils/test-utils';
import { screen } from '@testing-library/react';

test('should display the correct sidebar items', () => {
  // Arrange
  renderWithRouterRedux(<Sidebar />, ['/']);

  // Act
  const contactsLink = screen.getByText('Contacts');
  const settingsLink = screen.getByText('Settings');

  // Assert
  expect(contactsLink).toBeInTheDocument();
  expect(settingsLink).toBeInTheDocument();
});

test('should change url when clicking on Settings link', () => {
  // Arrange
  const { history } = renderWithRouterRedux(<Sidebar />, ['/']);

  // Act
  const settingsLink = screen.getByText('Settings');
  settingsLink.click();

  // Assert
  expect(history.location.pathname).toEqual('/settings');
});

test('should ensure the Settings link is set to active when clicked', () => {
  // Arrange
  renderWithRouterRedux(<Sidebar />, ['/']);

  // Act
  const settingsLink = screen.getByText('Settings');
  settingsLink.click();

  // Assert
  expect(settingsLink).toHaveClass('active');
});

test('should ensure the Settings link is NOT set to active when another link is clicked', () => {
  // Arrange
  renderWithRouterRedux(<Sidebar />, ['/']);

  // Act
  const settingsLink = screen.getByText('Settings');
  settingsLink.click();
  screen.getByText('Contacts').click();

  // Assert
  expect(settingsLink).not.toHaveClass('active');
});
