import _ from 'lodash';

export default function orderRules(rules) {
  const groups = _.groupBy(rules, (rule) => rule.category);
  const groupsArray = Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
  const grouped = groupsArray.map(([, groupRules]) => groupRules.sort((a, b) => a.id.localeCompare(b.id)));
  const sorted = grouped.reduce((arr, groupRules) => arr.concat(groupRules), []);
  const indexed = sorted.map((rule, index) => Object.assign({}, rule, {
    index: index + 1
  }));

  return indexed;
}
