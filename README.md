<h1 align="center">📖 Awesome Address Book 📖</h1>
<br>
<p align="center">This project shows a basic address book built with ReactJS, Redux Toolkit, React Router and Typescript 🚀</p>

<p align="center">
  <a href="https://github.com/cmacdonnacha/awesome-address-book/actions?query=workflow%3A%22Continuous+Integration%22">
    <img src="https://github.com/cmacdonnacha/awesome-address-book/workflows/Continuous%20Integration/badge.svg" />
  </a>
  <a href="https://github.com/cmacdonnacha/awesome-address-book/actions?query=workflow%3A%22Daily+Monitoring%22">
    <img src="https://github.com/cmacdonnacha/awesome-address-book/workflows/Daily%20Monitoring/badge.svg" />
  </a>
  <a href="https://dashboard.cypress.io/projects/qcywts/runs">
    <img src="https://img.shields.io/badge/Cypress%20E2E%20Dashboard-Live-brightgreen.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/david/cmacdonnacha/awesome-address-book.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="contributions" />
  </a>
</p>

## Includes

- [Redux Toolkit][redux-toolkit]
- [React Router][react-router]
- [Typescript][typescript]
- [Jest][jest]
- [React Testing Library][react-testing-library]
- [Cypress][cypress]
- [ESLint][eslint]
- [Prettier][prettier]
- [Github Actions CI/CD][github-actions]
- [Styled Icons Pack][styled-icons]
- [Source Map Explorer][source-map-explorer] to analyze code bloat

&nbsp;

## Features

<span>🔍 &nbsp; Contacts search with infinite scrolling</span></br>
<span>🧔 &nbsp; Nationalities selection</span></br>
<span>📞 &nbsp; Mobile friendly / Responsive design</span></br>
<span>♿ &nbsp; Accessability compliant</span></br>
<span>🧪 &nbsp; Unit & Integration tests</span></br>
<span>🧭 &nbsp; Sidebar navigation</span>

&nbsp;

## Live Demo

[Check out the live demo](https://cmacdonnacha.github.io/awesome-address-book/)

&nbsp;

## Set up

1. `git clone https://github.com/cmacdonnacha/awesome-address-book.git awesome-address-book`
2. `cd awesome-address-book`
3. `npm install`
4. That's it! See the **Available Commands** list below.

&nbsp;

## Available Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs unit and integration tests in watch mode. Use `npm run test:no-watch` to run tests without a watcher.<br />

### `npm run test:no-watch`

Runs unit and integrations tests without a watcher.

### `npm run test:coverage`

Displays the code coverage within the console and also generates a coverage folder.

> To view the code coverage report in your browser open the `index.html` file within the `coverage/lcov-report` folder.

### `npm run test:e2e`

Runs end-to-end tests using [Cypress][cypress]. This will run using the Electron (headless) browser which comes with Cypress. You can also view the latest test runs online via this project's [Cypress Dashboard](https://dashboard.cypress.io/projects/qcywts/runs)

### `npm run test:open`

Runs end-to-end tests and opens a window to see the results running on your machine.

### `npm run lint`

Runs the ESLint typescript code lint checker. Running `npm run lint:fix` will automatically fix any lint errors where possible.

### `npm run build`

Builds a production version of the app inside the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run analyze`

This will run a production build and then analyze the output using [source-map-explorer] which analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

&nbsp;

## CI/CD

This project uses [Github actions]([github-actions]) to continuously test, build and deploy. You can see the workflow file in the [workflows](.github/workflows/continuous-integration-workflow.yml) folder.

![CI/CD Screenshot](https://i.imgur.com/JIGWB38.png)

&nbsp;

## License

Licensed under the MIT license.

&nbsp;

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[continuous-integration-badge]: https://github.com/cmacdonnacha/awesome-address-book/workflows/Continuous%20Integration/badge.svg
[dependencies-badge]: https://img.shields.io/david/cmacdonnacha/awesome-address-book.svg
[package]: https://www.npmjs.com/package/cra-template-ideal-starter
[typescript]: https://github.com/microsoft/TypeScript
[redux-toolkit]: https://github.com/reduxjs/redux-toolkit
[jest]: https://jestjs.io/
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
[cypress]: https://www.cypress.io/
[cra]: https://github.com/facebook/create-react-app
[source-map-explorer]: https://www.npmjs.com/package/source-map-explorer
[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
[github-actions]: https://github.com/cmacdonnacha/awesome-address-book/actions
[styled-icons]: https://styled-icons.js.org/
[react-router]: https://reacttraining.com/react-router/web/guides/quick-start
<!-- prettier-ignore-end -->
