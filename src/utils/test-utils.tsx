/**
 *
 * A collection of test utilities
 *
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import rootReducer from 'slices';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { initialState as contactsInitialState } from 'slices/contactsSlice';
import { initialState as settingsInitialState } from 'slices/settingsSlice';
import { RootState } from 'slices';

const rootInitialState: RootState = {
  contacts: contactsInitialState,
  settings: settingsInitialState,
};

/**
 * A utility function which helps render a component with React Router when running tests
 *
 * @param {JSX.Element} ui The component to render
 * @param {string[]} initialRoutes The route(s) to register with React Router
 */
export function renderWithRouter(ui: JSX.Element, initialRoutes: string[]) {
  const history = createMemoryHistory({ initialEntries: initialRoutes });

  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

/**
 * A utility function which helps render a component with React Router & Redux when running tests
 *
 * @param {JSX.Element} ui The component to render
 * @param {string[]} initialRoutes The route(s) to register with React Router
 * @param {object} initialState The initial redux state. If this is not passed the default root state is used.
 */
export function renderWithRouterRedux(ui: JSX.Element, initialRoutes: string[], initialState: object = rootInitialState) {
  const state = initialState;
  const history = createMemoryHistory({ initialEntries: initialRoutes });
  const myStore = configureStore({ reducer: rootReducer, preloadedState: state });

  return {
    ...render(
      <Provider store={myStore}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    history,
  };
}
