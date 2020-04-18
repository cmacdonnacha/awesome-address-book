<h1 align="center">📖 Awesome Address Book 📖</h1>
<br>
<p align="center">This project shows a basic address book built with ReactJS 🚀</p>

<p align="center">
  <a>
    <img src="https://github.com/cmacdonnacha/awesome-address-book/workflows/Continuous%20Integration/badge.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/david/cmacdonnacha/awesome-address-book.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="contributions" />
  </a>
</p>

## Features

- [Redux Toolkit][redux-toolkit]
- [Typescript][typescript]
- [Jest][jest]
- [React Testing Library][react-testing-library]
- [ESLint][eslint]
- [Prettier][prettier]
- [Github Actions CI/CD][github-actions]
- [Styled Icons Pack][styled-icons]
- [Source Map Explorer][source-map-explorer] to analyze code bloat
- Mobile friendly
- Unit & Integration test examples
- Accessability ready

&nbsp;

## Live Demo

[Check out the live demo](https://cmacdonnacha.github.io/awesome-address-book/)

&nbsp;

## Set up

1. Click the `Use this Template` button or `git clone https://github.com/cmacdonnacha/awesome-address-book.git awesome-address-book`
2. `cd my-app`
3. `npm install`
4. That's it! See the **Available Commands** list below.

&nbsp;

## Available Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. Use `npm run test:no-watch` to run tests without a watcher.<br />

### `npm test:no-watch`

Runs tests without a watcher.

### `npm test:coverage`

Displays the code coverage within the console and also generates a coverage folder.

> To view the code coverage report in your browser open the `index.html` file within the `coverage/lcov-report` folder.

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

## TODO

- Automatically bump version, git tag and perform release via github actions
- When [this PR](https://github.com/facebook/create-react-app/pull/8362) is merged, change `"test": "react-scripts test --env=jest-environment-jsdom-sixteen"` back to `"test": "react-scripts test"`. This is a temp alternative, see [this](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0). Change `test:no-watch` as well.

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
[cra]: https://github.com/facebook/create-react-app
[source-map-explorer]: https://www.npmjs.com/package/source-map-explorer
[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
[github-actions]: https://github.com/cmacdonnacha/awesome-address-book/actions
[styled-icons]: https://styled-icons.js.org/
[vs-code-my-typescript-react-snippets]: https://gist.github.com/cmacdonnacha/334ef14cb301c426ee6eb166eb500a5a
[vs-code-my-settings]: https://gist.github.com/cmacdonnacha/b6360f349c1a86aafda28f6d44c9d215
[vs-code-typescript-react-snippets]: https://github.com/infeng/vscode-react-typescript#readme
[vscode-extension-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-extension-auto-rename-tag]: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
[vscode-extension-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[vscode-extension-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-extension-git-lens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[vscode-extension-styled-components]: https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
[chrome-extension-axe]: https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd
[chrome-extension-wave]: https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh
[chrome-extension-redux-devtools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
<!-- prettier-ignore-end -->
