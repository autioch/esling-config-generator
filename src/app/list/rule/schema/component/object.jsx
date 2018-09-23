import Field from './field';

const renderProperties = (label, properties) => {
  if (!properties.length) {
    return '';
  }

  return (
    <div>
      {/* <div>{label}</div> */}
      <ul className="field__object-properties">
        { properties.map(([propName, item], index) => <li key={index}>{<Field propertyName={propName} obj={item} />}</li>) }
      </ul>
    </div>
  );
};

export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName || ''}</div>
    {renderProperties('Properties', Object.entries(obj.properties || {}))}
    {renderProperties('Additional properties', Object.entries(obj.additionalProperties || {}))}
  </div>
);
