import { Switch } from 'antd';

const noop = () => {}; // eslint-disable-line no-empty-function

export default function({ obj: { label, value } }) {
  return (
    <div className="field__obj">
      <Switch size="small" defaultChecked value={value} onChange={noop} /> {label}
    </div>
  );
}
