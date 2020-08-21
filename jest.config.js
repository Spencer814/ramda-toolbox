const { name, version } = require('./package');

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
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
  preset: 'ts-jest',
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
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/*.spec.ts'
  ],
  watchPlugins: [
    'jest-runner-eslint/watch-fix',
    'jest-watch-continue',
    'jest-watch-suspend',
    ['jest-watch-toggle-config', { setting: 'bail' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    ['jest-watch-toggle-config', { setting: 'verbose' }]
  ]
};
