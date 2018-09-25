import React, { Component } from 'react';
import { Icon, Radio } from 'antd';
import Schema from './schema';
import './styles';
const RadioGroup = Radio.Group;

export default class Rule extends Component {
  componentDidCatch(error, info) {
    console.log('RULE ERROR', this.props.rule.id);
    console.error(error);
    console.error(info);
  }
  render() {
    const { rule, index, style } = this.props;
    const { id, description, category, url, recommended, fixable, schemas, isDisabled, isChecked } = rule;

    return (
      <div className="rule" style={style}>
        <div className="rule__recommended">{recommended ? <Icon type="check" title="recommended"/> : ''}</div>
        <div className="rule__fixable">{fixable ? <Icon type="tool" title="fixable"/> : ''}</div>
        <div className="rule__info">
          <div className="rule__id">
            <span> {index} </span>
            <a href={url} target="_blank">{id}</a>
            <span className="rule__category">{category}</span>
          </div>
          <div className="rule__description">{description}</div>
        </div>
        <div className="rule__enabled">
          <RadioGroup options={['Error', 'Warn', 'Off']} value="Error" />
        </div>
        {isDisabled ? <div>DISABLED</div> : <Schema schemas={schemas} input=""/> }
        {isChecked || schemas.length === 0 ? '' : <pre style={{
          fontSize: '10px'
        }}>{JSON.stringify(schemas, null, '  ')}</pre>}
      </div>
    );
  }
}
