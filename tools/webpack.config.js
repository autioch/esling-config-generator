const { dirname, join } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.argv.indexOf('-p') > -1;
const projectRoot = join(__dirname, '..');
const sourceRoot = join(projectRoot, 'src');
const buildRoot = join(projectRoot, 'build');

const babelEnv = {
  targets: {
    browsers: ['last 2 versions'],
    ie: 9 // eslint-disable-line no-magic-numbers
  },
  modules: false,
  loose: true
};

const webpackConfig = {
  context: sourceRoot,
  entry: ['babel-polyfill', join(sourceRoot, 'index')],
  output: {
    path: buildRoot,
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.php', '.png', '.scss', '.css', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(woff2|ttf|eot|woff|png|php|svg|jpg)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      })
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ ['env', babelEnv] ]
        }
      }
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ ['env', babelEnv], 'react']
        }
      }
    }]
  },
  plugins: [
    autoprefixer,
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin([join(buildRoot, '*')], {
      root: dirname(buildRoot),
      verbose: false,
      dry: false
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: join(sourceRoot, 'index.html'),
      filename: 'index.html',
      allChunks: true
    })
  ],
  stats: {
    children: false,
    hash: false,
    version: false,
    colors: true,
    maxModules: Infinity,
    optimizationBailout: true
  }
};

if (isProduction) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  );
}

module.exports = webpackConfig;
