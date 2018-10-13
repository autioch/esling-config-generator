import { Select } from 'antd';

const { Option } = Select; // eslint-disable-line no-shadow

export default function({ obj: { label: enumLabel, options } }) {
  return (
    <div>
      {enumLabel}
      <Select defaultValue={0} size="small">
        {options.map(({ value, label }, index) => <Option title="-" value={value} key={index}>{label}</Option>)}
      </Select>
    </div>
  );
}
