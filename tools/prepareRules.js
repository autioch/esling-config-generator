const { join } = require('path');
const { writeFile } = require('fs');
const eslintLoadRules = require('eslint/lib/load-rules');

const rulePathsDict = eslintLoadRules();
const rules = Object.entries(rulePathsDict)
  .map(([id, absolutePath]) => ({
    id,
    meta: require(absolutePath).meta
  }));

const fileName = join(__dirname, '..', 'src', 'rules.json');
const contents = JSON.stringify(rules, null, '  ');

writeFile(fileName, contents, 'utf8', (err) => {
  if (err) {
    console.log(err.message);
  } else {
    const ruleCount = Object.keys(rules).length;

    console.log(`Found ${ruleCount} rule${ruleCount > 1 ? 's' : ''}`);
  }
});
