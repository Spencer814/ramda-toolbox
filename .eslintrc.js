module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: false,
      modules: true
    }
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:jsdoc/recommended',
    'plugin:ramda/recommended',
    'prettier'
  ],
  plugins: [
    'eslint-plugin-ramda',
    'eslint-plugin-prettier',
    'import',
    'jsdoc',
    'prettier'
  ],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    Symbol: true
  },
  rules: {
    'arrow-body-style': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline'
      }
    ],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ],
    'no-restricted-syntax': 0,
    'global-require': 0,
    'import/no-named-as-default': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-lonely-if': 0,
    'no-restricted-globals': 1,
    'no-underscore-dangle': [
      'warn',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION__']
      }
    ],
    'one-var': 0,
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
          'server',
          'draft'
        ]
      }
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-shadow': 0,
    'no-undef': 0,
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-escape': 0,
    'no-new': 0,
    'prefer-destructuring': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          ['internal', 'unknown'],
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'guard-for-in': 0,
    'no-cond-assign': [1, 'except-parens'],
    'import/extensions': [0, 'never'],
    'no-nested-ternary': 0,
    'no-eval': 2,
    eqeqeq: 0,
    'no-eq-null': 0,
    'new-cap': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-str': 2,
    'key-spacing': 0,
    'space-unary-ops': 0,
    'no-spaced-func': 2,
    'space-before-function-paren': 'warn',
    'spaced-comment': [2, 'always'],
    'array-bracket-spacing': [
      2,
      'never',
      {
        singleValue: false
      }
    ],
    'space-in-parens': [2, 'never'],
    'no-trailing-spaces': 2,
    yoda: [2, 'never'],
    'comma-style': [2, 'last'],
    curly: [2, 'all'],
    'dot-notation': 0,
    'eol-last': 2,
    'wrap-iife': [2, 'outside'],
    'space-infix-ops': 2,
    'space-return-throw-case': 0,
    'keyword-spacing': [2, { after: true, before: true }],
    'lines-around-comment': 0,
    'space-before-blocks': [2, 'always'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-extra-semi': 2,
    'no-unreachable': 2,
    semi: 2,
    strict: [2, 'global'],
    'no-confusing-arrow': 'off',
    'object-curly-newline': 'off',
    'ramda/always-simplification': ['error'],
    'ramda/compose-simplification': ['error'],
    'ramda/eq-by-simplification': ['error'],
    'ramda/prefer-complement': ['error'],
    'ramda/prefer-both-either': ['error'],
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      /**
       * @see https://eslint.org/blog/2019/01/future-typescript-eslint
       */
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: '**/*.js',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      /** The TS compiler will enforce these rules. */
      rules: {
        'import/no-unresolved': ['off'],
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
        'no-nested-ternary': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          { allowShortCircuit: true, allowTernary: true }
        ]
      }
    }
  ]
};
