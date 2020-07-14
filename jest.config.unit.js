const config = require('./jest.config');

config.projects = [
  {
    displayName: 'test',
    testRegex: '(/__tests__/.*|(\\.|/)test)\\.js?$'
  },
  {
    displayName: 'lint',
    runner: 'jest-runner-eslint',
    testMatch: ['**/*.js'],
    testPathIgnorePatterns: ['artifacts', 'docs']
  }
];

module.exports = config;
