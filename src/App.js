import React, { Component } from 'react';
import './App.css';
import {inject, observer} from 'mobx-react'
import slice from './slice.png'
import reacts from './icon.svg'
@inject('stores')@observer
export default class App extends Component {
  render() {
    console.log(this.props.stores)
    return (
      <div className="App">
        <img src={require('./imgaes/cat.jpg')} width={100} height={100}/>
        <img src={reacts}/>
        <h1>你好， parcel-bundler</h1>
      </div>
    )
  }
}

