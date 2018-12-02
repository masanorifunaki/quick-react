import React, {Component} from 'react';

export default class MyPool extends Component {
  show(e) {
    const t = e.type;
    console.log(t);
    setTimeout(() => {
      console.log(t);
    }, 1000);
  }
  render () {
    return (
      <button type='button' onClick={this.show.bind(this)}>Event</button>
    );
  }
}