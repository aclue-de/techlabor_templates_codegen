module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['CustomLabel'],
      labelAttributes: ['label'],
      controlComponents: ['CustomInput'],
      depth: 3,
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // https://stackoverflow.com/questions/44939304/eslint-should-be-listed-in-the-projects-dependencies-not-devdependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': 'off',
    // https://stackoverflow.com/questions/50468673/how-to-disable-eslint-rule-max-line-length-for-paragraph-in-template-of-vue-js
    'max-len': ['error', {
      code: 250,
      ignoreComments: true,
    }],
    // https://eslint.org/docs/latest/rules/no-shadow
    'no-shadow': 'off',
    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: ['error', { allow: ['momentTo_DD_MM_YYYY', 'Replace_Token', 'access_token', 'id_token', 'refresh_token', 'token_type', 'grant_type', 'client_id', 'redirect_uri', 'client_secret', 'expires_in'] }],
    'react/requires-default-props': 'off',
    // https://dev.to/chandelieraxel/why-do-react-need-to-be-in-scope-for-jsx-3hen
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': [2, { props: false }],
    // https://github.com/kriasoft/react-starter-kit/issues/1180
    'import/no-unresolved': 'off',
    // Maybe these rules are not needed and must be overthought with rewrite code
    'react/no-array-index-key': 'off',
    'array-callback-return': 'off',
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': 'off',
    // "eslint-disable-next-line react/jsx-props-no-spreading" on lines may be comment out in future and solve this problem
    // ContrastIconButton.tsx Line 25
    // LogoIcon.tsx Line 49
    // BookingPage.tsx Line 52
    'linebreak-style': 'off',
  },
  // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-globals
  globals: {
    JSX: 'writable',
  },
  // https://segmentfault.com/a/1190000042003904/en
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // https://stackoverflow.com/questions/56398742/eslint-throws-no-undef-errors-when-linting-jest-test-files
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
