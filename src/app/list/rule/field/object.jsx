import Field from './index';

const renderProperties = (label, properties) => {
  if (!properties.length) {
    return '';
  }

  return (
    <div>
      <div>{label}</div>
      <ul className="field__object-properties">
        { properties.map(({ pathKey, obj }, index) => <li key={index}>{<Field pathKey={pathKey} obj={obj} />}</li>) }
      </ul>
    </div>
  );
};

export default ({ label, properties, additionalProperties }) => (
  <div>
    <div>{label}</div>
    {renderProperties('Properties', properties)}
    {renderProperties('Additional properties', additionalProperties)}
  </div>
);
