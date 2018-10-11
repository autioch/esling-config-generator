import { Input } from 'antd';

export default ({ propertyName }) => (
  <div>
    <Input size="small" placeholder={propertyName || ''} defaultValue={''} />
  </div>
);
