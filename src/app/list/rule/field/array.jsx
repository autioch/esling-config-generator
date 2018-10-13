import Field from './index';

export default function ArrayField({ obj: { label, options } }) {
  return (
    <div>
      <div>{label}</div>
      {options.map((obj, index) =>
        <div className="field-array__option" key={index}>
          <Field pathKey={obj.pathKey} obj={obj} />
        </div>
      )}
    </div>
  );
}
