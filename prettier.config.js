module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: 'prettier.config.js',
      options: { parser: 'babel' }
    },
    {
      files: 'babel.config.js',
      options: { parser: 'babel' }
    },
    {
      files: '.eslintrc.js',
      options: { parser: 'babel' }
    },
    {
      files: 'jest.config.js',
      options: { parser: 'babel' }
    }
  ]
};
