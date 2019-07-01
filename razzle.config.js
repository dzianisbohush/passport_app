const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const paths = require('razzle/config/paths');

const cssLoaderFinder = makeLoaderFinder('css-loader');
module.exports = {
  modify(baseConfig, {dev}, webpack) {
    /* make a copy of config */
    const config = Object.assign({}, baseConfig);

    const lessLoader = {
      loader: require.resolve('less-loader'),
      options: {
        sourceMap: dev,
        javascriptEnabled: true
      },
    };

    // Copy base css rules and add less support
    config.module.rules.filter(cssLoaderFinder).forEach(rule => {
      const isCssModuleRule = !rule.test.test('module.css');
      const lessExclude = [paths.appBuild];
      let lessTest = /\.less$/;
      if (isCssModuleRule) {
        lessTest = /\.module\.less$/;
      } else {
        lessExclude.push(/\.module\.less$/);
      }

      // Use default configs
      config.module.rules.push({
        test: lessTest,
        exclude: lessExclude,
        use: [
          ...rule.use,
          lessLoader,
        ]
      });
    });

    // adding ./src to module resolver so I can import modules with absolute paths
    config.resolve.modules.push('./src');

    return config;
  },
};
