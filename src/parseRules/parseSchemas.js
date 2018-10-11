/* eslint no-use-before-define: 0 */
import field from './field';

function parseSchema(schema) {
  if (schema.oneOf) {
    return parseSchemas(schema.oneOf);
  }
  if (schema.anyOf) {
    return parseSchemas(schema.anyOf);
  }

  const fieldInfo = field({
    pathKey: '',
    obj: schema
  });

  return [fieldInfo];
}

function parseSchemas(schemas) {
  if (Array.isArray(schemas)) {
    return schemas.reduce((arr, schema) => arr.concat(parseSchema(schema)), []);
  }

  return parseSchema(schemas);
}

export default parseSchemas;
