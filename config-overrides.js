/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('react-scripts/config/paths');
const path = require('path');
const fs = require('fs');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['syntax-dynamic-import'], config);
  console.log('NODE_ENV', env);
  if (env === 'production') {
    config.devtool = 'nosources-source-map'; //без sourcemap
  }
  config.resolve.alias = {
    deql: path.resolve(__dirname, './src/'),
    '@': path.resolve(__dirname, './../'),
  };

  delete config.resolve.plugins[0];
  config.resolve.plugins[0] = new ModuleScopePlugin(
    path.resolve(__dirname, './../')
  );
  return config;
};
