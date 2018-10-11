// import { Checkbox } from 'antd';
import { Switch } from 'antd';

// import './styles';

const noop = () => {}; // eslint-disable-line no-empty-function

export default ({ label, value }) => (
  <div className="field__obj">
    <Switch size="small" defaultChecked value={value} onChange={noop} /> {label}
  </div>
);
