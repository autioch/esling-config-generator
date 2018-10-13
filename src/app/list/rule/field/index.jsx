import React, { Component } from 'react';
import anyOfField from './anyOf';
import arrayField from './array';
import arrayTypeField from './arrayType';
import booleanField from './boolean';
import enumField from './enum';
import enumArrayField from './enumArray';
import integerField from './integer';
import numberField from './number';
import numberArrayField from './numberArray';
import objectField from './object';
import oneOfField from './oneOf';
import stringField from './string';
import stringArrayField from './stringArray';
import unknownField from './unkown';

const Views = {
  anyOf: anyOfField,
  array: arrayField,
  arrayType: arrayTypeField,
  'boolean': booleanField,
  'enum': enumField,
  enumArray: enumArrayField,
  integer: integerField,
  number: numberField,
  numberArray: numberArrayField,
  object: objectField,
  oneOf: oneOfField,
  string: stringField,
  stringArray: stringArrayField,
  unknown: unknownField
};

export default class Field extends Component {
  // componentDidCatch(error, info) {
  //   console.log('FIELD', this.props);
  //   console.error(error);
  //   console.error(info);
  // }
  render() {
    const { pathKey, obj } = this.props;
    const View = Views[obj.type];

    return (<View pathKey={pathKey} obj={obj} />);
  }
}
