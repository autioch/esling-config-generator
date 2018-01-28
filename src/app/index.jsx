import React, { Component } from 'react';
import List from './list';

export default class App extends Component {
  render() {
    return (<List rules={this.props.rules}/>);
  }
}
