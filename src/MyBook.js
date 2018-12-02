import React, {Component} from 'react';
import MyCover from './MyCover';

export default class MyBook extends Component {
  render () {
    return (
      <div>
        <MyCover isbn={this.props.info.isbn}
        title={this.props.info.title}/>
        <ul>
          <li>Name: {this.props.info.title}</li>
          <li>Price: {this.props.info.price}</li>
        </ul>
      </div>
    );
  }
}