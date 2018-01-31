import Field from './field';

export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName} - One of</div>
    <ul>
      {obj.oneOf.map((option, index) => <Field propertyName="" obj={option} key={index}/>)}
    </ul>
  </div>
);
