const config = require('./jest.config');

config.projects = [{
  displayName: 'test',
  testMatch: [
    '**/__tests__/*.test.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
},
{
  displayName: 'tsc',
  runner: 'jest-runner-tsc',
  testMatch: [
    '**/*.ts'
  ]
},
{
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: [
    '**/*.js',
    '**/*.ts'
  ],
  testPathIgnorePatterns: [
    'artifacts',
    'docs'
  ]
}];
module.exports = config;
