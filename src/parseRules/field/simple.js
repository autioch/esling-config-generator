const unknownField = ({ pathKey, obj }) => ({
  pathKey,
  label: `${pathKey} - UNKOWN`,
  type: 'unkown',
  value: JSON.stringify(obj, null, '  ')
});

const numberField = ({ pathKey, obj }) => ({
  pathKey,
  min: obj.minimum || obj.min || 0,
  max: obj.maximum || obj.max || Infinity,
  type: 'number',
  label: pathKey
});

const integerField = ({ pathKey, obj }) => ({
  pathKey,
  min: obj.minimum || obj.min || 0,
  max: obj.maximum || obj.max || Infinity,
  type: 'number',
  label: pathKey
});

const booleanField = ({ pathKey }) => ({
  pathKey,
  label: pathKey,
  type: 'boolean',
  value: false
});

const stringField = ({ pathKey }) => ({
  pathKey,
  placeholder: pathKey || '',
  type: 'string',
  value: ''
});

const stringArrayField = ({ pathKey }) => ({
  pathKey,
  label: pathKey ? `${pathKey}:` : '',
  type: 'stringArray',
  options: []
});

const numberArrayField = ({ pathKey }) => ({
  pathKey,
  type: 'numberArray',
  label: pathKey ? `${pathKey}:` : '',
  options: []
});

const enumArrayField = ({ obj, pathKey }) => ({
  pathKey,
  type: 'enumArray',
  label: pathKey ? `${pathKey}:` : '',
  maxItems: obj.maxItems || Infinity,
  value: [],
  options: obj.enum.map((option) => ({
    label: option,
    value: option
  }))
});

const enumField = ({ pathKey, obj }) => ({
  pathKey,
  type: 'enum',
  label: pathKey ? `${pathKey}:` : '',
  options: obj.enum.map((option, index) => ({
    value: index,
    label: (option || '').toString()
  }))
});

const arrayTypeField = ({ pathKey, obj }) => ({
  pathKey,
  type: 'arrayType',
  label: `${pathKey}- ARRAY TYPE?!`,
  value: JSON.stringify(obj, null, '  ')
});

export { arrayTypeField, enumField, stringField, unknownField, enumArrayField, numberArrayField, stringArrayField, booleanField, integerField, numberField };
