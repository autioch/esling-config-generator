export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName} - ARRAY TYPE?! </div>
    <div>{JSON.stringify(obj, null, '  ')}</div>
  </div>
);
