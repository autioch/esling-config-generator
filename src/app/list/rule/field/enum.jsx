import { Select } from 'antd';

const { Option } = Select; // eslint-disable-line no-shadow

export default ({ label: enumLabel, options }) => (
  <div>
    {enumLabel}
    <Select defaultValue={0} size="small">
      {options.map(({ value, label }, index) => <Option title="-" value={value} key={index}>{label}</Option>)}
    </Select>
  </div>
);
