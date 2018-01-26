import React, { Component } from 'react';

import { Tag } from 'antd';

export default class App extends Component {
  constructor() {
    super();
    console.log('dupa');
  }
  render() {
    return (<Tag>Example 3</Tag>);
  }
}
