const { join } = require('path');
const { writeFile } = require('fs');
const eslintLoadRules = require('eslint/lib/load-rules');

const headerLines = [
  '/* eslint max-lines: 0 */',
  '/* eslint max-len: 0 */',
  'module.exports = '
].join('\r\n');

const rulePathsDict = eslintLoadRules();
const rules = Object.entries(rulePathsDict)
  .map(([id, absolutePath]) => ({
    id,
    meta: require(absolutePath).meta
  }));

const fileName = join(__dirname, '..', 'src', 'rules.js');
const contents = `${headerLines}${JSON.stringify(rules, null, '  ')};`;

writeFile(fileName, contents, 'utf8', (err) => {
  if (err) {
    console.log(err.message);
  } else {
    const ruleCount = Object.keys(rules).length;

    console.log(`Found ${ruleCount} rule${ruleCount > 1 ? 's' : ''}`);
  }
});
