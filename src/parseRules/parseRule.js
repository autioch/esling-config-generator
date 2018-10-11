import { DISABLED_RULES, CHECKED_RULES } from './whitelists';
import parseSchemas from './parseSchemas';

export default function parseRule(rule, errorLevels) {
  const { id, meta: { docs: { description, category, recommended, url }, fixable, schema } } = rule;
  const schemas = parseSchemas(schema);

  return {
    id,
    description,
    category,
    recommended,
    errorLevel: errorLevels[0].value,
    fixable,
    url,
    schemas,
    isDisabled: DISABLED_RULES[id],
    debugInfo: CHECKED_RULES[id] || !schemas.length ? false : JSON.stringify(schemas, null, '  ')
  };
}
