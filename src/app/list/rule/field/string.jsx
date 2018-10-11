import { Input } from 'antd';

export default ({ placeholder, value }) => (
  <div>
    <Input size="small" placeholder={placeholder} defaultValue={value} />
  </div>
);
