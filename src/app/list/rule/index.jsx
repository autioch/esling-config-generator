import React, { Component } from 'react';
import { Icon, Radio } from 'antd';
import Schema from './schema';
import './styles';
import { DISABLED_RULES, CHECKED_RULES } from './whitelists';
const RadioGroup = Radio.Group;

export default class Rule extends Component {
  render() {
    const {
      id,
      meta: {
        docs: { recommended, category, description, url },
        fixable,
        schema
      }
    } = this.props.rule;

    return (
      <div className="rule" style={this.props.style}>
        <div className="rule__recommended">{recommended ? <Icon type="check" title="recommended"/> : ''}</div>
        <div className="rule__fixable">{fixable ? <Icon type="tool" title="fixable"/> : ''}</div>
        <div className="rule__info">
          <div className="rule__id">
            <span> {this.props.index} </span>
            <a href={url} target="_blank">{id}</a>
            <span className="rule__category">{category}</span>
          </div>
          <div className="rule__description">{description}</div>
        </div>
        <div className="rule__enabled">
          <RadioGroup options={['Error', 'Warn', 'Off']} value="Error" />
        </div>
        { DISABLED_RULES[id] ? <div>DISABLED</div> : <Schema schema={schema} input=""/> }
        {CHECKED_RULES[id] || schema.length === 0 ? '' : <pre style={{
          'font-size': '10px'
        }}>{JSON.stringify(schema, null, '  ')}</pre>}
      </div>
    );
  }
}
