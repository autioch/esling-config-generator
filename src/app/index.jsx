import React from 'react';
import List from './list';

export default function App({ state }) {
  return (<List rules={state.rules}/>);
}
