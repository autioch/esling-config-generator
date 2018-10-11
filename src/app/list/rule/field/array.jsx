import Field from './index';

export default ({ label, options }) => (
  <div>
    <div>{label}</div>
    {options.map(({ pathKey, obj }, index) =>
      <div className="field-array__option" key={index}>
        <Field pathKey={pathKey} obj={obj} />
      </div>
    )}
  </div>
);
