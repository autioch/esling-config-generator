import Field from './index';

export default ({ label, options }) => (
  <div>
    <div>{label}</div>
    {options.map(({ pathKey, obj }, index) =>
      <div>
        <Field pathKey={pathKey} obj={obj} key={index}/>
      </div>
    )}
  </div>
);
