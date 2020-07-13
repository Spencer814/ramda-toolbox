const config = require('./jest.config');

config.projects = [
  {
    displayName: 'test',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)s?$'
  },
  {
    displayName: 'tsc',
    runner: 'jest-runner-tsc',
    testMatch: ['**/*.ts']
  },
  {
    displayName: 'lint',
    runner: 'jest-runner-eslint',
    testMatch: ['**/*.js', '**/*.ts'],
    testPathIgnorePatterns: ['artifacts', 'docs']
  }
];

module.exports = config;
