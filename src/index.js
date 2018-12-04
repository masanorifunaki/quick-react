import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import MyHello from './MyHello';
import MyType from './MyType';
import MyBook from './MyBook';
import MyArticle from './MyArticle'
import MyEvent from './MyEvent'
import MyPool from './MyPool'
import MyState from './MyState'

import * as serviceWorker from './serviceWorker';

const style = {color: "Red"};

const book = {
  isbn: 'WGS-JST-001',
  title: 'webpack',
  price: 454
};

const articles = [
  {
    url: 'https://www.atmarkit.co.jp/ait/series/9383/',
    title: 'Angular TIPS',
    description: '人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
    isNew: true
  },
  {
    url: 'https://www.buildinsider.net/web/jqueryref',
    title: 'jQuery逆引きリファレンス',
    description: 'jQueryの基本機能や実用Tipsを目的別リファレンスの形式でまとめる',
    isNew: false
  },
  {
    url: 'https://codezine.jp/article/corner/578',
    title: 'HTML／JavaScript開発作業を効率化する便利ツールの活用',
    description: 'HTML／JavaScript開発作業を効率化する様々なツールやライブラリを紹介',
    isNew: true
  },
  {
    url: 'https://www.atmarkit.co.jp/ait/series/1432/',
    title: 'Web業界で働くためのPHP入門',
    description: 'オープンソースのWeb開発向けスクリプト言語「PHP」の文法を一から学ぶための入門記事',
    isNew: false
  },
  {
    url: 'https://www.atmarkit.co.jp/ait/series/8323/',
    title: 'Android Studioで始めるKotlin入門',
    description: 'Android Studio 3.0を使い、最近話題のプログラミング言語「Kotlin」の特徴を解説',
    isNew: false
  },
];

ReactDOM.render(
 <MyState/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
