import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export default function ErrorLevel({ rule, store, state }) {
  return (
    <RadioGroup
      onChange={(ev) => store.setErrorLevel({
        ruleId: rule.id,
        errorLevel: ev.target.value
      })}
      value={rule.errorLevel}>
      {state.errorLevels.map(({ value, label }) => <Radio key={value} value={value}>{label}</Radio>) }
    </RadioGroup>
  );
}
