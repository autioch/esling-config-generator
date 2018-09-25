const { join } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const babelEnv = {
  targets: {
    browsers: ['last 2 versions'],
    ie: 9 // eslint-disable-line no-magic-numbers
  },
  modules: false,
  loose: true
};

module.exports = function prepareWebpackConfig({ sourceRoot, buildRoot, projectRoot }) {
  return {
    context: sourceRoot,
    entry: ['babel-polyfill', join(sourceRoot, 'index')],
    output: {
      path: buildRoot,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.png', '.scss', '.css', '.jsx']
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ ['env', babelEnv] ],
            plugins: [ ['import', {
              libraryName: 'antd',
              style: 'css'
            }] ]
          }
        }
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ ['env', babelEnv], 'react'],
            plugins: [ ['import', {
              libraryName: 'antd',
              style: 'css'
            }] ]
          }
        }
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              }
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      }, {
        test: /\.(woff2|ttf|eot|woff|png|jpg|json)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }]
    },
    stats: {
      children: false,
      hash: false,
      version: false,
      colors: true,
      maxModules: Infinity,
      optimizationBailout: true
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        template: join(sourceRoot, 'index.html'),
        filename: 'index.html',
        allChunks: true
      }),
      new CleanWebpackPlugin([buildRoot], {
        root: projectRoot,
        verbose: false,
        dry: false
      })
    ]
  };
};
