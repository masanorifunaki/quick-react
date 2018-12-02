import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import MyHello from './MyHello';
import MyType from './MyType';
import MyBook from './MyBook';

import * as serviceWorker from './serviceWorker';

const style = {color: "Red"};

const book = {
  isbn: 'WGS-JST-001',
  title: 'webpack',
  price: 454
};

ReactDOM.render(
  <MyBook info={book} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
