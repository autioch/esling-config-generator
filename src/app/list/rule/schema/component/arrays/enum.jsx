import { Select } from 'antd';
import React from 'react';

const { Option } = Select; // eslint-disable-line no-shadow

export default function EnumArray({ item }) {
  const children = item.enum.map((option, index) => <Option key={index}>{option}</Option>);

  return (
    <Select
      mode="multiple"
      style={{
        width: '100%'
      }}
      size="small"
      maxTagCount={item.maxItems}

      placeholder="Choose"
      defaultValue={[]}
    >
      {children}
    </Select>
  );
}
