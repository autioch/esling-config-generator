import React from 'react';
import Field from './component/field';
import './styles';

export default function Schema({ schemas }) {
  return (
    <div className="rule__schema-list">
      {schemas.map((schema, index) =>
        <div className="schema__option" key={index}>
          <Field propertyName="" obj={schema}/>
        </div>
      )}
    </div>
  );
}
