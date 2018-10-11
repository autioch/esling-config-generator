/* eslint no-use-before-define: 0 */
import StringArray from './arrays/string';
import NumberArray from './arrays/number';
import EnumArray from './arrays/enum';
import ObjectComponent from './object';

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

const Views = {
  string: StringArray,
  number: NumberArray,
  'enum': EnumArray
};

function subview(contentType) {
  if (Views[contentType.type]) {
    const View = Views[contentType.type];

    return <View item={contentType}/>;
  }

  if (contentType.type === 'object') {
    return <ObjectComponent obj={contentType} />;
  }

  if (contentType.enum) {
    const View = Views.enum;

    return <View item={contentType}/>;
  }

  return <pre style={{
    fontSize: '10px'
  }}>{JSON.stringify(contentType, null, '  ')}</pre>;
}

export default function array({ propertyName, obj }) {
  const contentTypes = prepareSchemas(obj.items);
  const fixedName = propertyName ? `"${propertyName}"` : '';

  if (contentTypes.length === 1) {
    return (
      <div className="field__array--single">
        <div className="field__array-name--single">{propertyName}</div>
        {subview(contentTypes[0])}
      </div>
    );
  }

  return (
    <div>
      <div>{fixedName}</div>
      {contentTypes.map((contentType, index) =>
        <div className="field-array__option" key={index}>
          {subview(contentType)}
        </div>
      )}
    </div>
  );
}
