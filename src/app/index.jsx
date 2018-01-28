import React, { Component } from 'react';
import List from './list';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (<List rules={this.props.rules}/>);
  }
}
