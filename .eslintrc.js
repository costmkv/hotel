module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier'
  ],
  plugins: [
    "simple-import-sort",
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', {
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'es5',
    }],

    "simple-import-sort/imports": [
      2,
      { "groups": [["^\\u0000"], ["^[^.]"], ["^\\."]] }
    ],

    'no-plusplus': 'off',
    'no-console': 'error',
    "class-methods-use-this": "off",
    'no-underscore-dangle': ['error', { allowAfterThis: true }],

    'import/prefer-default-export': 'off',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "modifiers": ["destructured"],
        "format": null
      }
    ],
  }
};
