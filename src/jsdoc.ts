export = {
  plugins: [],
  recurseDepth: 10,
  source: {
    include: ['build', 'README.md'],
    includePattern: '.+\\.js(doc|x)?$',
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
    destination: './docs/jsdoc/',
    recurse: true
  }
};
