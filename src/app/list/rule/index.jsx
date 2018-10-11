import React, { Component } from 'react';
import { Icon } from 'antd';
import Schema from './schema';
import ErrorLevel from './errorLevel';

import './styles';

export default class Rule extends Component {
  componentDidCatch(error, info) {
    console.log('RULE ERROR', this.props.rule.id);
    console.error(error);
    console.error(info);
  }
  render() {
    const { rule, style, store, state } = this.props;
    const { id, index, description, category, url, recommended, fixable, schemas, isDisabled, showDebug } = rule;

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
        <ErrorLevel className="rule__enabled" rule={rule} store={store} state={state} />
        {isDisabled ? <div>DISABLED</div> : <Schema schemas={schemas} input=""/> }
        {showDebug ? <pre className="rule__debug">{JSON.stringify(schemas, null, '  ')}</pre> : '' }
      </div>
    );
  }
}
