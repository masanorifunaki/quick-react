import React, { Component } from 'react';
// 4 ルーティング関連の機能をインポート
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// ルーティングで利用するコンポーネントをインポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          {/* 3 ルーティング経由のリンクリストを準備 */}
          <ul>
            <li><Link to="/">TOP</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/article/13">Article 13</Link></li>
            <li><Link to="/article/108">Article 108</Link></li>
          </ul>
          <hr/>
          {/* 2 ルーティング設定 条件にマッチしたコンポーネントを出力 */}
          <Switch>
            <Route exact path="/" component={MyTop}/>
            <Route path="/hello" component={MyHello}/>
            <Route path="/article/:id" component={MyArticle}/>
            <Route component={MyTop}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
