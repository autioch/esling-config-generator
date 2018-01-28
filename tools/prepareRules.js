const { join } = require('path');
const { writeFile } = require('fs');
const eslintLoadRules = require('eslint/lib/load-rules');

const linterRuleLines = [
  '/* eslint max-lines: 0 */',
  '/* eslint max-len: 0 */'
];

function rulesToLines(rules) {
  return Object.entries(rules).reduce((list, [id, absolutePath]) => list.concat([
    `  id: '${id}',`,
    `  meta: require('${absolutePath.replace(/\\/g, '/')}').meta`,
    '}, {'
  ]), []);
}

module.exports = function prepareRules({ sourceRoot }) {
  const rules = eslintLoadRules();
  const ruleCount = Object.keys(rules).length;
  const fileName = join(sourceRoot, 'rules.js');
  const ruleLines = rulesToLines(rules);

  ruleLines.pop();

  const contents = linterRuleLines.concat('module.exports = [{').concat(ruleLines).concat('}];', '')
    .join('\r\n');

  return new Promise((resolve, reject) => {
    writeFile(fileName, contents, 'utf8', (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(`Found ${ruleCount} rule${ruleCount > 1 ? 's' : ''}`);
      }
    });
  });
};
