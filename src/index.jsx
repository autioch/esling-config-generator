import React from 'react';
import { render } from 'react-dom';
import App from './app';
import rules from './rules';
import './styles';
import _ from 'lodash';

window.React = React; // yay, no need to import react everywhere? At least for now ;)

const groups = _.groupBy(rules, (rule) => rule.meta.docs.category);

const preparedRules = Object.entries(groups)
  .sort((a, b) => a[0].localeCompare(b[0]))

  // .filter(([groupKey]) => groupKey === 'Stylistic Issues')
  .map(([, groupRules]) => groupRules)
  .reduce((arr, groupRules) => arr.concat(groupRules.sort((a, b) => a.id.localeCompare(b.id))), []);

render(<App rules={preparedRules} />, document.querySelector('.app-container'));
