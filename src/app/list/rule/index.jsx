import React, { Component } from 'react';
import { Icon, Radio } from 'antd';
import Schema from './schema';
import Info from './info';
import './styles';

const RadioGroup = Radio.Group;

export default class Rule extends Component {
  render() {
    const {
      meta: {
        docs: { recommended },
        fixable,
        schema
      }
    } = this.props.rule;

    return (
      <div className="rule">
        <div className="rule__recommended">{recommended ? <Icon type="check" title="recommended"/> : ''}</div>
        <div className="rule__fixable">{fixable ? <Icon type="tool" title="fixable"/> : ''}</div>
        <Info rule={this.props.rule} />
        <div className="rule__enabled">
          <RadioGroup options={['Off', 'Warn', 'Error']} value="Error" />
        </div>
        <Schema schema={schema} input=""/>
      </div>
    );
  }
}
