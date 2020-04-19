import React from 'react';
import SettingsPage from './SettingsPage';
import { screen } from '@testing-library/react';
import { renderWithRouterRedux } from '../../utils/test-utils';

test('should render settings page heading', () => {
  // Arrange
  renderWithRouterRedux(<SettingsPage />, ['/settings']);

  // Act
  const element = screen.getByText('Select nationalities to be included in your address book:');

  // Assert
  expect(element).toBeInTheDocument();
});
