const { name, version } = require('./package');

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  automock: true,
  bail: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'artifacts',
  coverageReporters: [
    'json',
    'json-summary',
    'text',
    'lcov',
    'html',
    'clover',
    'cobertura'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'node', 'ts'],
  projects: [
    {
      displayName: 'test',
      runner: 'jest-runner-tsc',
      testPathIgnorePatterns: ['artifacts', 'build', 'docs'],
      testRegex: '^.+.spec.ts$'
    },
    {
      displayName: 'lint',
      modulePathIgnorePatterns: [
        'index.js',
        '.eslintrc.js',
        'babel.config.js',
        'jsdoc.js',
        'jest.config.js'
      ],
      runner: 'jest-runner-eslint',
      testPathIgnorePatterns: ['artifacts', 'build', 'docs'],
      testRegex: '^.+.(j|t)s$'
    }
  ],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'report.html',
        pageTitle: `${name} v${version}`,
        publicPath: './artifacts'
      }
    ],
    [
      'jest-junit',
      {
        outputDirectory: './artifacts',
        outputName: './coverage-junit-report.xml'
      }
    ]
  ],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  testEnvironment: 'node',
  timers: 'fake',
  transform: {
    '^.+\\.[t|j]s?$': 'ts-jest'
  },
  verbose: true,
  watchPlugins: [
    'jest-runner-eslint/watch-fix',
    'jest-watch-continue',
    'jest-watch-suspend',
    ['jest-watch-toggle-config', { setting: 'bail' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    ['jest-watch-toggle-config', { setting: 'verbose' }]
  ]
};
