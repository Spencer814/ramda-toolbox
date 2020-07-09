/**
 * @description
 * Main ESLint config. Most rules are inherited from the `extends` key,
 * but our own overrides live within the `rules` key. Ultimately, the
 * rules that are enforced should add value and consistency to our code -
 * not to inhibit one's ability to get work done and be productive.
 *
 * NOTE: If altering `rules`, leave a small explanation for why the change
 * was made. This config once lived within our package.json, but that
 * restricted us from adding comments to explain certain rules.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      modules: true
    }
  },
  extends: ['eslint:recommended', 'prettier'],
  settings: {
    'import/resolver': {
      node: {},
    }
  },
  plugins: ['import'],
  env: {
    node: true,
    jest: true
  },
  rules: {
    'arrow-body-style': 0,
    /** Often times, API data does not come in camel cased, converting to and from all the time is
     *  a pain and disabling inline would be insanely verbose. Seek to limit camel cased variables
     *  to API data only.
     */
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
    /** If all variables in destructuring should be const, this rule warns the variables. Otherwise, ignores them. */
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ],
    // for of loops are fine...
    'no-restricted-syntax': 0,
    'global-require': 0,
    'import/no-named-as-default': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    /** This is perfectly valid syntax... */
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
    /** This is silly, c'mon */
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
    /** Expressions are extremely useful constructs — especially in JSX */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-shadow': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    /** Disabled to allow for defining propTypes/defaultProps above function declaration components */
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-escape': 0,
    'no-new': 0,
    'prefer-destructuring': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', ['internal', 'unknown'], 'parent', 'sibling', 'index']
      }
    ],
    'guard-for-in': 0,
    'no-cond-assign': [1, 'except-parens'],
    'import/extensions': [0, 'never'],
    'no-nested-ternary': 0
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
