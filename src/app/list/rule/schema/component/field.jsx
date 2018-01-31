/* eslint max-statements: 0 */
import AnyOfComponent from './anyOf';
import ArrayComponent from './array';
import ArrayTypeComponent from './arrayType';
import BooleanComponent from './boolean';
import EnumComponent from './enum';
import IntegerComponent from './integer';
import NumberComponent from './number';
import ObjectComponent from './object';
import OneOfComponent from './oneOf';
import StringComponent from './string';
import UnknownComponent from './unkown';

export default ({ propertyName, obj }) => {
  let Component = '';

  if (obj.type === 'boolean') {
    Component = BooleanComponent;
  } else if (obj.type === 'object') {
    Component = ObjectComponent;
  } else if (obj.type === 'array') {
    Component = ArrayComponent;
  } else if (obj.type === 'integer') {
    Component = IntegerComponent;
  } else if (obj.type === 'number') {
    Component = NumberComponent;
  } else if (obj.type === 'string') {
    Component = StringComponent;
  } else if (obj.enum) {
    Component = EnumComponent;
  } else if (obj.oneOf) {
    Component = OneOfComponent;
  } else if (obj.anyOf) {
    Component = AnyOfComponent;
  } else if (Array.isArray(obj.type)) {
    Component = ArrayTypeComponent;
  } else {
    Component = UnknownComponent;
  }

  return (<Component propertyName={propertyName} obj={obj} />);
};
