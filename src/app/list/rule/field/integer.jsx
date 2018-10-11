import { InputNumber } from 'antd';

export default ({ min, max, label }) => (
  <div>
    <InputNumber size="small" min={min} min={max} defaultValue={min}/> {label}
  </div>
);
