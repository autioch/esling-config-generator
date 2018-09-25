import rulesURL from './rules.json';
import parseRules from './parseRules';

export default {
  fetchRules({ store }) {
    window
      .fetch(rulesURL)
      .then((resp) => resp.json())
      .then((rules) => store.setRules(rules));
  },

  setRules({ data: rules }) {
    const parsedRules = parseRules(rules);

    return {
      rules: parsedRules
    };
  }

};
