const path = require('path');

module.exports = {
  define: {
    env: process.env.NODE_ENV,
  },
  alias: {
    // 'regenerator-runtime': path.resolve(__dirname, 'node_modules/regenerator-runtime'),
  },
  webpack5: true,
  plugins: [],
  polyfill: 'entry',
  targets: ['miniapp', 'wechat-miniprogram', 'web'],
  // 阿里小程序
  miniapp: {
    nativeConfig: {
      component2: true,
    },
    nativePackage: {
      autoInstall: true,
      dependencies: {
        '@antv/my-f2': '^2.1.7',
      },
    },
  },
  // 微信小程序配置
  'wechat-miniprogram': {
    // polyfillFunction: true,
    // nativeConfig: {
    //   appId: YOUR_APP_ID,
    //   miniprogramRoot: "build/wechat-miniprogram"
    // },
    // subPackages: {
    //   shareMemory: true
    // },
    // runtimeDependencies: [],
    // nativePackage: {
    //   autoInstall: true,
    //   dependencies: {}
    // }
  },
};
