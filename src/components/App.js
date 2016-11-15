import React, { Component } from 'react'

// children
import Nav from './Nav'

// styling, assets
import logo from '../assets/logo.svg'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hikurangi's Blog</h2>
        </div>
        <Nav />
      </div>
    );
  }
}

export default App;
