const path = require('path');

module.exports = {
  modify: baseConfig => {
    const config = baseConfig;

    // add aliases
    config.resolve.alias = {
      client: path.resolve('src/client/'),
      server: path.resolve('src/server/'),
      common: path.resolve('src/common/'),
    };

    // change default devtool
    config.devtool = 'cheap-module-source-map';

    return config;
  },
};
