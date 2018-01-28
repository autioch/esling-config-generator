import React, { Component } from 'react';
import { Icon, Collapse, Radio } from 'antd';

import './styles';

const { Panel } = Collapse;
const RadioGroup = Radio.Group;

export default class Rule extends Component {
  render() {
    const {
      id,
      meta: {
        docs: { category, description, recommended, url },
        fixable,
        schema
      }
    } = this.props.rule;

    return (
      <div className="rule">
        <div className="rule__recommended">{recommended ? <Icon type="check" title="recommended"/> : ''}</div>
        <div className="rule__fixable">{fixable ? <Icon type="tool" title="fixable"/> : ''}</div>
        <div className="rule__info">
          <div className="rule__id">
            <a href={url} target="_blank">{id}</a>
            <span className="rule__category">{category}</span>
          </div>
          <div className="rule__description">{description}</div>
        </div>
        <div className="rule__enabled">
          <RadioGroup options={['Off', 'Warn', 'Error']} value="Error" />
        </div>
        <div className="rule__schema">
          <Collapse accordion>
            {(Array.isArray(schema) ? schema : [schema]).map((option, index) => <Panel header={index} key={index}>
              <pre>{JSON.stringify(option, null, '  ')}</pre>
            </Panel>)}
          </Collapse>
        </div>
      </div>
    );
  }
}
