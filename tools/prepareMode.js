const webpack = require('webpack');

module.exports = function prepareMode({ isProduction, isWatch, buildRoot }, webpackConfig) {
  if (isProduction) {
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({}),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    );
  } else {
    webpackConfig.devtool = 'source-map';
  }

  if (isWatch) {
    const LiveReloadPlugin = require('webpack-livereload-plugin');

    webpackConfig.watch = true;
    webpackConfig.plugins.push(new LiveReloadPlugin({
      appendScriptTag: true,
      ignore: /.(js|json|config|ico|woff|map|html)$/
    }));
    require('serve-local')(buildRoot, 8080); // eslint-disable-line no-magic-numbers
  }

  return webpackConfig;
};
