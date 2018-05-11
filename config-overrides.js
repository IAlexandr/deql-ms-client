/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path');
const fs = require('fs');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['syntax-dynamic-import'], config);
  if (env === 'production') {
    config.devtool = 'nosources-source-map'; //без sourcemap
  }
  config.resolve.alias = {
    '@': path.resolve(__dirname, './src/'),
    'deql': path.resolve(__dirname, './../client/'),
  };

  delete config.resolve.plugins[0];
  config.resolve.plugins[0] = new ModuleScopePlugin(path.resolve(__dirname,'./../'))
  return config;
};
