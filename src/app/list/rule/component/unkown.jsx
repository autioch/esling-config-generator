export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName} - UNKOWN</div>
    <pre className="unkown-schema">{JSON.stringify(obj, null, '  ')}</pre>
  </div>
);
