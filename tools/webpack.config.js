const { join } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.argv.indexOf('-p') > -1;
const isWatch = process.argv.indexOf('-watch') > -1;
const projectRoot = join(__dirname, '..');
const sourceRoot = join(projectRoot, 'src');
const buildRoot = join(projectRoot, 'build');

const babelEnv = {
  targets: {
    browsers: ['last 2 versions']
  },
  modules: false,
  loose: true
};

const webpackConfig = {
  watch: isWatch,
  context: sourceRoot,
  entry: [join(sourceRoot, 'index')],
  output: {
    path: buildRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.php', '.png', '.scss', '.css', '.jsx']
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
          loader: 'sass-loader'
        }]
      })
    }, {
      test: /\.(woff2|ttf|eot|woff|png|jpg)$/i,
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

module.exports = webpackConfig;
