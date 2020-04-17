module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin. For list of rules see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier,
  ],
  plugins: [
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "curly": "error",
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ['node_modules/', 'src/serviceWorker.ts', 'template/src/serviceWorker.ts'],
};
