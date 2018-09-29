'use strict';

// const path = require('path');

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537634252250_7643';

  // add your config here
  config.middleware = [];

  // config.view = {
  //   root: path.join(appInfo.baseDir, 'app/view'),
  //   mapping: {
  //     '.js': 'assets',
  //   },
  // };

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    // templatePath: path.join(appInfo.baseDir, 'app/view/index.html'),
    // templateViewEngine: 'nunjucks',
    publicPath: '/public/',
    devServer: {
      debug: true,
      command: 'umi dev',
      port: 8000,
      env: {
        // APP_ROOT: process.cwd() + '/app/assets',
        BROWSER: 'none',
        ESLINT: 'none',
        APP_TYPE: 'site',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  config.security = {
    csrf: false,
  };

  return config;
};
