const { join } = require('path');
const prepareWebpackConfig = require('./prepareWebpackConfig');
const prepareMode = require('./prepareMode');

const projectRoot = join(__dirname, '..');

const setup = {
  projectRoot,
  sourceRoot: join(projectRoot, 'src'),
  buildRoot: join(projectRoot, 'build'),
  isWatch: process.argv.indexOf('--watch') > -1,
  isProduction: process.argv.indexOf('-p') > -1
};

const webpackConfig = prepareWebpackConfig(setup);

prepareMode(setup, webpackConfig);
module.exports = webpackConfig;
