import Field from './field';

export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName} - Any of</div>
    <ul>
      {obj.anyOf.map((option, index) => <Field propertyName="" obj={option} key={index}/>)}
    </ul>
  </div>
);
