import React from 'react';

export default ({ rule: { id, meta: { schema, docs: { category, description, url } } } }) => (
  <div className="rule__info">
    <div className="rule__id">
      <a href={url} target="_blank">{id}</a>
      <span className="rule__category">{category}</span>
    </div>
    <div className="rule__description">{description}</div>
    <div>{schema ? schema.length : 'No'} schema to choose</div>
  </div>
);
