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
  env: {
    es6: true,
    jest: true,
    node: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@babel',
    '@typescript-eslint',
    'eslint-plugin-import-order-alphabetical',
    'import',
    'ramda',
    'sort-destructure-keys',
    'sort-keys-fix'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 'off',
    'class-methods-use-this': 'off',
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
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'import-order-alphabetical/order': 'error',
    'import/group-exports': 'error',
    'import/no-dynamic-require': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    indent: ['error', 2],
    'jest/no-try-expect': 'off',
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
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'server'
        ]
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_transform']
      }
    ],
    'no-var': 'error',
    'node/no-unsupported-features/es-builtins': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: true
      }
    ],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'ramda/always-simplification': 'error',
    'ramda/any-pass-simplification': 'error',
    'ramda/both-simplification': 'error',
    'ramda/complement-simplification': 'error',
    'ramda/compose-pipe-style': 'off',
    'ramda/compose-simplification': 'error',
    'ramda/cond-simplification': 'error',
    'ramda/either-simplification': 'error',
    'ramda/eq-by-simplification': 'error',
    'ramda/filter-simplification': 'error',
    'ramda/if-else-simplification': 'error',
    'ramda/map-simplification': 'error',
    'ramda/merge-simplification': 'error',
    'ramda/no-redundant-and': 'error',
    'ramda/no-redundant-not': 'error',
    'ramda/no-redundant-or': 'error',
    'ramda/pipe-simplification': 'error',
    'ramda/prefer-both-either': 'error',
    'ramda/prefer-complement': 'error',
    'ramda/prefer-ramda-boolean': 'error',
    'ramda/prop-satisfies-simplification': 'error',
    'ramda/reduce-simplification': 'error',
    'ramda/reject-simplification': 'error',
    'ramda/set-simplification': 'error',
    'ramda/unless-simplification': 'error',
    'ramda/when-simplification': 'error',
    semi: ['error', 'always'],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false
      }
    ],
    'spaced-comment': ['error', 'always']
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
