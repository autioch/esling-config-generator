/* eslint eqeqeq: 0 */
/* eslint max-len: 0 */
/* eslint no-use-before-define: 0*/
import React from 'react';
import './styles';
import Field from './component/field';

export default class Schema extends React.Component {
  render() {
    const { schema } = this.props;

    return (
      <div className="rule__schema">
        { (Array.isArray(schema) ? schema : [schema]).map((option, index) => <Field propertyName="" obj={option} key={index}/>) }
      </div>
    );
  }
}
