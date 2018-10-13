import { InputNumber } from 'antd';

export default function({ obj: { min, max, label } }) {
  return (
    <div>
      <InputNumber size="small" min={min} min={max} defaultValue={min}/> {label}
    </div>
  );
}
