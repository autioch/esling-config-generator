import React from 'react';
import List from './list';

export default function App({ state, store }) {
  return (<List rules={state.rules} state={state} store={store}/>);
}
