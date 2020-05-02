import React from 'react';
import { waitFor, screen, fireEvent, waitForElementToBeRemoved, getByText } from '@testing-library/react';
import ContactsPage from './ContactsPage';
import { renderWithRouterRedux } from '../../utils/test-utils';
import axios from 'axios';
import ContactsList from './ContactsList';

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
    phone: '949 7791244',
    cell: '7463 56555',
    location: {
      city: 'Baltimore',
      street: 'East Side',
      state: 'Maryland ',
      postcode: 'PK 88S9',
    },
  },
  {
    login: {
      uuid: '2',
      username: 'jmcnulty',
    },
    name: {
      first: 'Jimmy',
      last: ' McNulty',
    },
    email: 'j.mcnulty@whatdidido.com',
    picture: { large: 'https://i.imgur.com/7mgyfIC.png' },
    phone: '882 910858',
    cell: '104 1020818',
    location: {
      city: 'Limerick',
      street: 'Glin Castle',
      state: 'Glin ',
      postcode: 'V94 VF68',
    },
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

describe('Fetching Contacts', () => {
  test('should find a contact within the list', async () => {
    // Arrange
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/']);

    // Act
    const elements = await waitFor(() => screen.getAllByText('Omar Little'));

    // Assert
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('should display contact name in two places', async () => {
    // Arrange
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/']);

    // Act
    const elements = await waitFor(() => screen.getAllByText('Omar Little'));

    // Assert
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(elements.length).toBe(2);
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
    const element = await waitFor(() => screen.getByText('No contacts found', { exact: false }));

    // Assert
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(element).toBeInTheDocument();
  });

  test('should display error message when an error occurs while fetching contacts', async () => {
    // Arrange
    renderWithRouterRedux(<ContactsPage />, ['/']);

    // Act
    const element = await waitFor(() => screen.getByText('No contacts found', { exact: false }));

    // Assert
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(element).toBeInTheDocument();
  });
});

describe('Searching Contacts', () => {
  test('should have empty search input by default', () => {
    // Arrange
    renderWithRouterRedux(<ContactsPage />, ['/']);

    // Act
    const searchInput = screen.getByLabelText('Search for contacts') as HTMLInputElement;

    // Assert
    expect(searchInput.value).toBe('');
  });

  test('should display correct search results', async () => {
    // Arrange
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/']);

    // Arrange
    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Type in some search text
    const searchInput = screen.getByLabelText('Search for contacts') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Jimmy' } });

    // Click on the search result so that the default contact details are not displayed (i.e Omar's contact details are displayed as soon as the app loads)
    screen.getByText('Jimmy McNulty').click();

    // Assert
    expect(screen.getAllByText('Jimmy McNulty')[0]).toBeInTheDocument();
    // Use queryByText when you want to check if an element is NOT present
    expect(screen.queryByText('Omar Little')).not.toBeInTheDocument();
  });

  test('should clear search results correctly', async () => {
    // Arrange
    fetchMockContacts();
    renderWithRouterRedux(<ContactsList />, ['/contacts']);

    // Arrange
    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Type in some search text
    const searchInput = screen.getByLabelText('Search for contacts') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Jimmy' } });
    screen.getByText('Jimmy McNulty').click();

    // Assert
    expect(screen.getByText('Jimmy McNulty')).toBeInTheDocument();
    expect(screen.queryByText('Omar Little')).not.toBeInTheDocument();

    // Clear search text
    fireEvent.change(searchInput, { target: { value: '' } });

    // Should now display all contacts again
    expect(screen.getByText('Jimmy McNulty')).toBeInTheDocument();
    expect(screen.getByText('Omar Little')).toBeInTheDocument();
  });
});
