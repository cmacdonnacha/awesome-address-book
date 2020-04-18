import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import ContactsPage from './ContactsPage';
import { renderWithRouterRedux } from '../../utils/test-utils';
import axios from 'axios';

// Mock the Axios module. This ensure we don't call a real rest api while running tests.
jest.mock('axios');

// This line simply resolves the typescript errors caused when using jest.mock('axios').
const axiosMock = axios as jest.Mocked<typeof axios>;

const mockContacts = [
  {
    login: {
      uuid: '1',
      username: 'olittle',
    },

    name: {
      first: 'Omar',
      last: 'Little',
    },
    email: 'o.little@comeattheking.com',
    picture: { large: 'https://i.imgur.com/eTia7Xp.jpg' },
  },
];

// We could use a beforeEach here but this way it's easier to keep track of what your tests are doing.
const fetchMockContacts = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      results: mockContacts,
    },
  });
};

const fetchMockNoContacts = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      results: [],
    },
  });
};

// Give each test a clean slate.
beforeEach(() => axiosMock.get.mockReset());

test('should find a contact within the list', async () => {
  // Arrange
  fetchMockContacts();
  renderWithRouterRedux(<ContactsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText('Omar Little'));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});

test('should display loading text while waiting for contacts to load', async () => {
  // Arrange
  fetchMockContacts();
  renderWithRouterRedux(<ContactsPage />, ['/']);

  // Act
  await waitFor(() => {
    // Assert
    expect(screen.getByText('Loading contacts...')).toBeInTheDocument();
  });
});

test('should display error message when no contacts found', async () => {
  // Arrange
  fetchMockNoContacts();
  renderWithRouterRedux(<ContactsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText("Couldn't find contacts", { exact: false }));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});

test('should display error message when an error occurs while fetching contacts', async () => {
  // Arrange
  renderWithRouterRedux(<ContactsPage />, ['/']);

  // Act
  const element = await waitFor(() => screen.getByText("Couldn't find contacts", { exact: false }));

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(element).toBeInTheDocument();
});
