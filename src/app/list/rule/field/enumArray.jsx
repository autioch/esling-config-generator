import { Select } from 'antd';
import React from 'react';

const { Option } = Select; // eslint-disable-line no-shadow

export default function EnumArray({ obj: { label: objLabel, options, maxItems } }) {
  const children = options.map(({ label, value }, index) => <Option key={index} value={value}>{label}</Option>);

  return (
    <div>
      {objLabel}
      <Select
        mode="multiple"
        style={{
          width: '100%'
        }}
        size="small"
        maxTagCount={maxItems}

        placeholder="Choose"
        defaultValue={[]}
      >
        {children}
      </Select>
    </div>
  );
}
