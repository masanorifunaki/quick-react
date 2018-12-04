import React, {Component} from 'react';

export default class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'child data'
    };
    this.props.onUpdate(this.state);
  }
  render () {
    return(
      <p>MyChild: {this.state.date}</p>
    );
  }
}