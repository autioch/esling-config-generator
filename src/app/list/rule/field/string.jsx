import { Input } from 'antd';

export default function({ obj: { placeholder, value } }) {
  return (
    <div>
      <Input size="small" placeholder={placeholder} defaultValue={value} />
    </div>
  );
}
