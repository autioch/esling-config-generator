/* eslint no-use-before-define: 0 */
import _ from 'lodash';
import { DISABLED_RULES, CHECKED_RULES } from './whitelists';

function prepareSchema(schema) {
  if (schema.oneOf) {
    return prepareSchemas(schema.oneOf);
  }
  if (schema.anyOf) {
    return prepareSchemas(schema.anyOf);
  }

  return [schema];
}

function prepareSchemas(schemas) {
  if (Array.isArray(schemas)) {
    return schemas.reduce((arr, schema) => arr.concat(prepareSchema(schema)), []);
  }

  return prepareSchema(schemas);
}

export default function parseRules(rawRules) {
  const parsedRules = rawRules.map((rule) => {
    const { id, meta: { docs: { description, category, recommended, url }, fixable, schema } } = rule;
    const schemas = prepareSchemas(schema);

    return {
      id,
      description,
      category,
      recommended,
      fixable,
      url,
      schemas,
      isDisabled: DISABLED_RULES[id],
      isChecked: CHECKED_RULES[id]
    };
  });

  const groups = _.groupBy(parsedRules, (rule) => rule.category);

  const sortedRules = Object.entries(groups)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, groupRules]) => groupRules)
    .reduce((arr, groupRules) => arr.concat(groupRules.sort((a, b) => a.id.localeCompare(b.id))), []);

  return sortedRules;
}
