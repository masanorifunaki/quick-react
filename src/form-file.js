import React, {Component} from 'react';

export default class MyFile extends Component {
  constructor(props) {
    super(props);
    // ファイル入力ボックスへの参照
    this.file = React.createRef();
    this.show = this.show.bind(this);
  }
  // 送信ボタンクリック時に入力値をログに出力
  show() {
    const f = this.file.current.files[0];
    console.log(`File: ${f.name}`);
    console.log(`Type: ${f.type}`);
    console.log(`Size: ${Math.trunc(f.size / 1024)}KB`);
  }
  // ファイル入力ボックスを生成
  render () {
    return (
      <form>
        <input type="file" ref={this.file}/>
        <button type="button" onClick={this.show}>Submit</button>
      </form>
    );
  }
}