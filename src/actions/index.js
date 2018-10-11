import rulesURL from './rules.json';
import parseRules from '../parseRules';

export default {
  fetchRules({ store }) {
    window
      .fetch(rulesURL)
      .then((resp) => resp.json())
      .then((rules) => store.setRules(rules));
  },

  setRules({ data: rules, state: { errorLevels } }) {
    const parsedRules = parseRules(rules, errorLevels);

    return {
      rules: parsedRules
    };
  },

  setErrorLevel({ data: { ruleId, errorLevel }, state: { rules } }) {
    return {
      rules: rules.map((rule) => {
        if (rule.id === ruleId) {
          return Object.assign({}, rule, {
            errorLevel
          });
        }

        return rule;
      })
    };
  }

};
