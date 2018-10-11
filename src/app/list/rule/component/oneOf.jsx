import Field from './field';

export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName}</div>
    <div className="c-radio-group">
      {obj.oneOf.map((option, index) =>
        <div className="c-radio-option" key={index}>
          <Field propertyName="" obj={option}/>
        </div>
      )}
    </div>
  </div>
);
