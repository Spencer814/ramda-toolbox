module.exports = {
  recurseDepth: 10,
  source: {
    include: ['src'],
    includePattern: '.+\\.(j|t)s(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
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
    recurse: true,
    readme: 'README.md'
  }
};
