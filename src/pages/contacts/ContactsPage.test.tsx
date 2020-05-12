import React from 'react';
import { waitFor, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithRouterRedux } from '../../utils/test-utils';
import axios from 'axios';
import ContactsPage from './ContactsPage';

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
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for text to be rendered
    const elements = await waitFor(() => screen.getAllByText('Omar Little'));

    // Contact should be displayed
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(elements[0]).toBeInTheDocument();
  });

  test('should display contact name in 2 place', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for text to be rendered
    const elements = await waitFor(() => screen.getAllByText('Omar Little'));

    // Should be displayed in both Contacts List and Contact Details
    expect(elements.length).toBe(2);
  });

  test('should display loading text while waiting for contacts to load', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Loading text should be displayed
    expect(screen.getByText('Loading contacts...')).toBeInTheDocument();
  });

  test('should display error message when no contacts found', async () => {
    // Setup
    fetchMockNoContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for text to be rendered
    const element = await waitFor(() => screen.getByText('No contacts found', { exact: false }));

    // Text should be displayed
    expect(element).toBeInTheDocument();
  });

  test('should display error message when an error occurs while fetching contacts', async () => {
    // Setup
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for error message to be displayed
    const element = await waitFor(() => screen.getByText('Something went wrong', { exact: false }));

    // Check that error message was displayed
    expect(element).toBeInTheDocument();
  });
});

describe('Searching Contacts', () => {
  test('should have empty search input by default', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Find search input
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;

    // Check that the default value is empty
    expect(searchInput.value).toBe('');
  });

  test('should display correct search results', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Type in some search text
    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'Jimmy' } });

    // Click on the result
    const result = screen.getAllByText('Jimmy McNulty')[0];
    result.click();

    // Check that the correct results have been rendered.
    // Note: The element will be found in both the contacts list & details so just check the first one.
    expect(screen.getAllByText('Jimmy McNulty')[0]).toBeInTheDocument();

    // Use queryByText when you want to check if an element is NOT present. Using getByText would throw an error as it wouldn't find the element.
    expect(screen.queryByText('Omar Little')).not.toBeInTheDocument();
  });

  test('should clear search results correctly', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Type in some search text
    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'Jimmy' } });
    screen.getByText('Jimmy McNulty').click();

    // Check that the correct results have been rendered.
    // Note: The element will be found in both the contacts list & details so just check the first one.
    expect(screen.getAllByText('Jimmy McNulty')[0]).toBeInTheDocument();
    expect(screen.queryByText('Omar Little')).not.toBeInTheDocument();

    // Clear search text
    fireEvent.change(searchInput, { target: { value: '' } });

    // Should now display all contacts again
    expect(screen.getAllByText('Jimmy McNulty')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Omar Little')[0]).toBeInTheDocument();
  });

  test('should display friendly message when no contacts found after searching', async () => {
    // Setup
    fetchMockContacts();
    renderWithRouterRedux(<ContactsPage />, ['/contacts']);

    // Wait for loading text to disappear so we know the mocked contacts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading contacts', { exact: false }));

    // Type in some bad search text
    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'bla bla bla' } });

    // Text should be displayed
    expect(screen.getByText('No contacts found')).toBeInTheDocument();
  });
});
