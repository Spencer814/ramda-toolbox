module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      modules: true
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-order-alphabetical',
    'import',
    'ramda',
    'sort-destructure-keys',
    'sort-keys-fix'
  ],
  ignorePatterns: '**/*.js',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'object-curly-newline': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '=': 'after'
        }
      }
    ]
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/strict',
    'plugin:ramda/recommended'
  ]
};
