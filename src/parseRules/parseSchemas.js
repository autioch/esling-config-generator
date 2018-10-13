/* eslint no-use-before-define: 0 */

function parseSchema(schema) {
  if (schema.oneOf) {
    return parseSchemas(schema.oneOf);
  }
  if (schema.anyOf) {
    return parseSchemas(schema.anyOf);
  }

  return [schema];
}

function parseSchemas(schemas) {
  if (Array.isArray(schemas)) {
    return schemas.reduce((arr, schema) => arr.concat(parseSchema(schema)), []);
  }

  return parseSchema(schemas);
}

export default parseSchemas;
