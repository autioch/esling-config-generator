import { InputNumber } from 'antd';

export default ({ propertyName, obj }) => (
  <div>
    <InputNumber size="small" min={obj.minimum || obj.min || 0} min={obj.maximum || obj.max || Infinity} defaultValue={obj.minimum || obj.min || 0}/> {propertyName}
  </div>
);
