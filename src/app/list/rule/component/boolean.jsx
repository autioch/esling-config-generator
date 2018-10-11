// import { Checkbox } from 'antd';
import { Switch } from 'antd';

// import './styles';

const noop = () => {}; // eslint-disable-line no-empty-function

export default ({ propertyName }) => (
  <div className="field__obj">
    <Switch size="small" defaultChecked onChange={noop} /> {propertyName}
  </div>
);
