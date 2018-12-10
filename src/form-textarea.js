import React, {Component} from 'react';

export default class MyTextarea extends Component {
  constructor(props) {
    super(props);
    // State を初期化
    this.state = {
      memo: 'React',
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }
  // テキストエリアの反映時に入力値をStateに反映
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // 送信ボタンクリック時に入力値をログに出力
  show() {
    console.log(`Memo: ${this.state.memo}`);
  }
  // テキストエリアを生成
  render () {
    return (
      <form>
        <label htmlFor="memo">Memo:</label><br/>
        <textarea name="memo" id="memo" cols="30" rows="7" value={this.state.memo} onChange={this.handleChange}>
        </textarea><br/>
        <button type="button" onClick={this.show}>Submit</button>
      </form>
    );
  }
}