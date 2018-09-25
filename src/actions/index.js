import _ from 'lodash';
import rulesURL from '../rules.json';

export default {
  fetchRules({ store }) {
    window
      .fetch(rulesURL)
      .then((resp) => resp.json())
      .then((rules) => store.setRules(rules));
  },

  setRules({ data: rules }) {
    const groups = _.groupBy(rules, (rule) => rule.meta.docs.category);

    const preparedRules = Object.entries(groups)
      .sort((a, b) => a[0].localeCompare(b[0]))

      // .filter(([groupKey]) => groupKey === 'Stylistic Issues')
      .map(([, groupRules]) => groupRules)
      .reduce((arr, groupRules) => arr.concat(groupRules.sort((a, b) => a.id.localeCompare(b.id))), []);

    return {
      rules: preparedRules
    };
  }

};
