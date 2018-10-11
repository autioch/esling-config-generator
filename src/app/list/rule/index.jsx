import React, { Component } from 'react';
import { Icon, Radio } from 'antd';
import Field from './field';

import './component';
import './styles';

const RadioGroup = Radio.Group;

export default class Rule extends Component {
  componentDidCatch(error, info) {
    console.log('RULE ERROR', this.props.rule.id);
    console.error(error);
    console.error(info);
  }
  render() {
    const { rule, style, store, state } = this.props;
    const { id, index, description, category, url, recommended, fixable, schemas, isDisabled, debugInfo } = rule;

    return (
      <div className="rule" style={style}>
        <div className="rule__icon">{recommended ? <Icon type="check" title="recommended"/> : ''}</div>
        <div className="rule__icon">{fixable ? <Icon type="tool" title="fixable"/> : ''}</div>
        <div className="rule__info">
          <div className="rule__header">
            <span className="rule__index">{index}.</span>
            <a className="rule__url" href={url} target="_blank">{id}</a>
            <span className="rule__category">{category}</span>
          </div>
          <div className="rule__description">{description}</div>
        </div>
        <RadioGroup
          onChange={(ev) => store.setErrorLevel({
            ruleId: rule.id,
            errorLevel: ev.target.value
          })}
          value={rule.errorLevel}>
          {state.errorLevels.map(({ value, label }) => <Radio key={value} value={value}>{label}</Radio>) }
        </RadioGroup>
        {isDisabled ? <div>DISABLED</div> : <div className="rule__schema-list">
          {schemas.map((schema, schemaIndex) =>
            <div className="schema__option" key={schemaIndex}>
              <Field pathKey="" obj={schema}/>
            </div>
          )}
        </div> }
        {debugInfo ? <pre className="rule__debug">{debugInfo}</pre> : '' }
      </div>
    );
  }
}
