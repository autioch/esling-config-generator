const { join } = require('path');
const prepareWebpackConfig = require('./prepareWebpackConfig');
const prepareRules = require('./prepareRules');
const prepareMode = require('./prepareMode');

const projectRoot = join(__dirname, '..');

const setup = {
  projectRoot,
  sourceRoot: join(projectRoot, 'src'),
  buildRoot: join(projectRoot, 'build'),
  isWatch: process.argv.indexOf('--watch') > -1,
  isProduction: process.argv.indexOf('-p') > -1
};

module.exports = prepareRules(setup)
  .then(() => prepareWebpackConfig(setup))
  .then((webpackConfig) => prepareMode(setup, webpackConfig));
