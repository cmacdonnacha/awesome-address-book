import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './slices';
import { colours } from './constants/colours';

// Set up the redux store
const store = configureStore({ reducer: rootReducer });

// Styled Components allows us to override global styles to preset common styles and fonts.
const GlobalStyle = createGlobalStyle`
  html, #root {
    background-color: ${colours.offWhite};
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App}></Route>
      </Router>
      <GlobalStyle />
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
