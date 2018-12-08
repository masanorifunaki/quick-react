import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    // 1. State を初期化
    this.state = {
      name: 'Yamda',
      email: 'mail'
    };
    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }
  // 3 入力ボックスの変更をStateに反映
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // 4 送信ボタンで入力値をログに出力
  show() {
    console.log(`name: ${this.state.name}`);
    console.log(`email: ${this.state.email}`);
  }

  render () {
    return (
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="mail" id="email" name="email" onChange={this.handleChange} value={this.state.email}/>
        </div>
        <div>
          <button type="button" onClick={this.show}>Submit</button>
        </div>
      </form>
    );
  }
}

