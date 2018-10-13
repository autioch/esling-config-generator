import { DISABLED_RULES, CHECKED_RULES } from './whitelists';
import parseSchemas from './parseSchemas';
import field from './field';

export default function parseRule(rule, errorLevels) {
  const { id, meta: { docs: { description, category, recommended, url }, fixable, schema } } = rule;
  const schemas = parseSchemas(schema).map((item) => field({
    pathKey: '',
    obj: item
  }));

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
    debugInfo: JSON.stringify(schema || {}, null, '  '), // CHECKED_RULES[id] || !schemas.length ? false : JSON.stringify(schemas, null, '  ')
    debugInfo2: JSON.stringify(schemas || {}, null, '  ')// CHECKED_RULES[id] || !schemas.length ? false : JSON.stringify(schemas, null, '  ')
  };
}
