import React, { Component } from 'react';
import Rule from './rule';

export default class List extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.rules.map((rule, index) => <Rule rule={rule} key={index} />)}
      </div>
    );
  }
}
