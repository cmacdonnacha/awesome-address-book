import React from 'react';
import { render } from '@testing-library/react';
import SettingsPage from './SettingsPage';
import { screen } from '@testing-library/react';

test('should render settings page heading', () => {
  // Arrange
  render(<SettingsPage />);

  // Act
  const element = screen.getByText('This is the settings page');

  // Assert
  expect(element).toBeInTheDocument();
});
