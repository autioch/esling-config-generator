import parseSchemas from '../parseSchemas';
import { arrayTypeField, enumField, unknownField, enumArrayField, numberArrayField, stringField, stringArrayField, booleanField, integerField, numberField } from './simple';

const anyOfField = ({ pathKey, obj }) => ({
  pathKey,
  label: `${pathKey} - Any of`,
  type: 'anyOf',
  options: obj.anyOf.map((option) => field({ // eslint-disable-line no-use-before-define
    pathKey,
    obj: option
  }))
});

const oneOfField = ({ pathKey, obj }) => ({
  pathKey,
  label: `${pathKey} - One of`,
  type: 'oneOf',
  options: obj.oneOf.map((option) => field({ // eslint-disable-line no-use-before-define
    pathKey,
    obj: option
  }))
});

const mapObjectProperties = (properties) => Object.entries(properties || {})
  .map(([pathKey, obj]) => field({ // eslint-disable-line no-use-before-define
    pathKey,
    obj
  }));

const objectField = ({ pathKey, obj }) => ({
  pathKey,
  label: pathKey || '',
  type: 'object',
  properties: mapObjectProperties(obj.properties),
  additionalProperties: mapObjectProperties(obj.additionalProperties)
});

function arraySubField(obj) {
  if (obj.type === 'string') {
    return stringArrayField;
  }
  if (obj.type === 'number') {
    return numberArrayField;
  }
  if (obj.type === 'object') {
    return objectField;
  }
  if (obj.enum) {
    return enumArrayField;
  }

  return unknownField;
}

function arrayField({ pathKey, obj }) {
  const contentTypes = parseSchemas(obj.items);

  if (contentTypes.length === 1) {
    return arraySubField(contentTypes[0])({
      obj: contentTypes[0],
      pathKey
    });
  }

  return {
    type: 'array',
    label: pathKey ? `"${pathKey}"` : '',
    options: contentTypes.map((obj2) => arraySubField(obj2)({
      obj: obj2,
      pathKey
    }))
  };
}

function field({ pathKey, obj }) {
  let fieldFn;

  if (obj.type === 'boolean') {
    fieldFn = booleanField;
  } else if (obj.type === 'object') {
    fieldFn = objectField;
  } else if (obj.type === 'array') {
    fieldFn = arrayField;
  } else if (obj.type === 'integer') {
    fieldFn = integerField;
  } else if (obj.type === 'number') {
    fieldFn = numberField;
  } else if (obj.type === 'string') {
    fieldFn = stringField;
  } else if (obj.enum) {
    fieldFn = enumField;
  } else if (obj.oneOf) {
    fieldFn = oneOfField;
  } else if (obj.anyOf) {
    fieldFn = anyOfField;
  } else if (Array.isArray(obj.type)) {
    fieldFn = arrayTypeField;
  } else {
    fieldFn = unknownField;
  }

  return fieldFn({
    pathKey,
    obj
  });
}

export default field;
