import React, {Component} from 'react';

export default class MyCover extends Component {
  show(e) {
    console.log(`${this.props.greet} ${e.target.value}!!`);
  }
  render () {
    return (
      <form>
        <label htmlFor="txtName">Name: </label>
        <input type="text" id='txtName' onChange={this.show.bind(this)}/>
      </form>
    );
  }
}