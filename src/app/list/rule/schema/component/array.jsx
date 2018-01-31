import Field from './field';

export default ({ propertyName, obj }) => (
  <div>
    <div>{propertyName} - Array (min {obj.minItems}, max {obj.maxItems})</div>
    <ul>
      {Array.isArray(obj.items) ? obj.items.map((option, index) => <Field propertyName="" obj={option} key={index}/>) : ''}
    </ul>
  </div>
);
