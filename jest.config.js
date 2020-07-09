const { description, name, version } = require('./package');

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
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
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
    ],
    [
      'jest-stare',
      {
        coverageLink: './report.html',
        resultDir: './artifacts',
        reportHeadline: `${name} v${version}`,
        reportSummary: true,
        reportTitle: description,
        resultHtml: 'coverage.html'
      }
    ]
  ],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  runner: 'jest-runner-eslint',
  testEnvironment: 'node',
  timers: 'fake',
  verbose: true,
  watchPathIgnorePatterns: [
    '.*jest-stare.*\\.js'
  ],
  watchPlugins: [
    'jest-runner-eslint/watch-fix',
    'jest-watch-continue',
    'jest-watch-select-projects',
    'jest-watch-suspend',
    ['jest-watch-toggle-config', { setting: 'bail' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    ['jest-watch-toggle-config', { setting: 'verbose' }]
  ]
};
