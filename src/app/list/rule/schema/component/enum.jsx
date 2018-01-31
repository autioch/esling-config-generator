import { Select } from 'antd';

const { Option } = Select; // eslint-disable-line no-shadow

export default ({ propertyName, obj }) => (
  <div>
    {propertyName ? `${propertyName}:` : ''}
    <Select defaultValue={0} style={{
      width: 120
    }}>
      {obj.enum.map((option, index) => <Option title="-" value={index} key={index}>{option}</Option>)}
    </Select>
  </div>
);
