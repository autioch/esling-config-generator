import Field from './index';

export default ({ label, options }) => (
  <div>
    <div>{label}</div>
    <div className="c-radio-group">
      {options.map(({ pathKey, obj }, index) =>
        <div className="c-radio-option" key={index}>
          <Field pathKey={pathKey} obj={obj}/>
        </div>
      )}
    </div>
  </div>
);
