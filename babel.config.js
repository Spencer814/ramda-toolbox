module.exports = {
  env: {
    commonjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            forceAllTransforms: true
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-modules-commonjs',
          {
            loose: true
          }
        ]
      ]
    },
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            forceAllTransforms: true
          }
        ]
      ]
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
};
