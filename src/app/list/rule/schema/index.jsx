/* eslint eqeqeq: 0 */
/* eslint max-len: 0 */
/* eslint max-statements: 0 */
import React from 'react';
import JsonSchemaForm from 'react-jsonschema-form';

export default class Schema extends React.Component {
  render() {
    return (
      <div className="rule__schema">
        { (Array.isArray(this.props.schema) ? this.props.schema : [this.props.schema]).map((option, index) =>
          <div key={index}>
            <JsonSchemaForm schema={option}>
              <button style={{
                display: 'none'
              }}/>
            </JsonSchemaForm>
          </div>
        ) }
      </div>
    );
  }
}
