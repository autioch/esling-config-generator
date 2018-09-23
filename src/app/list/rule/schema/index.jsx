/* eslint eqeqeq: 0 */
/* eslint max-len: 0 */
/* eslint no-use-before-define: 0 */
import React from 'react';

import Field from './component/field';
import './styles';

function prepareSchema(schema) {
  if (schema.oneOf) {
    return prepareSchemas(schema.oneOf);
  }
  if (schema.anyOf) {
    return prepareSchemas(schema.anyOf);
  }

  return [schema];
}

function prepareSchemas(schemas) {
  if (Array.isArray(schemas)) {
    return schemas.reduce((arr, schema) => arr.concat(prepareSchema(schema)), []);
  }

  return prepareSchema(schemas);
}

export default class Schema extends React.Component {
  constructor(attributes) {
    super(attributes);

    /* TODO Just for testing! */
    this.preparedSchema = prepareSchemas(this.props.schema);
  }
  render() {
    return (
      <div className="rule__schema-list">
        {this.preparedSchema
          .map((schema, index) =>
            <div className="schema__option" key={index}>
              <Field propertyName="" obj={schema}/>
            </div>
          )}
      </div>
    );
  }
}
