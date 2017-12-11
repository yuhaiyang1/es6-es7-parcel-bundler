import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store'
import {Provider} from 'mobx-react'
console.log(new Store())
const store = new Store()
ReactDOM.render(
  <Provider stores={store} >
    <App/>
  </Provider>,
  document.getElementById('root')
);
