module.exports = {
  plugins: [],
  recurseDepth: 10,
  source: {
    include: ['toolbox'],
    includePattern: '.+\\.(j|t)s(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  // Use 'script' if JSDoc logs errors such as
  // "Delete of an unqualified identifier in strict mode" when it parses.
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc']
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  },
  opts: {
    template: 'node_modules/docdash',
    destination: './docs/',
    recurse: true
  }
};
