import Field from './index';

export default function AnyOfField({ obj: { label, options } }) {
  return (
    <div>
      <div>{label}</div>
      {options.map((obj, index) =>
        <div>
          <Field pathKey={obj.pathKey} obj={obj} key={index}/>
        </div>
      )}
    </div>
  );
}
