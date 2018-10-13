import Field from './index';

export default function({ obj: { label, options } }) {
  return (
    <div>
      <div>{label}</div>
      <div className="c-radio-group">
        {options.map((obj, index) =>
          <div className="c-radio-option" key={index}>
            <Field pathKey={obj.pathKey} obj={obj}/>
          </div>
        )}
      </div>
    </div>
  );
}
