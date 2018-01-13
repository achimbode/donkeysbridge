import React, { Component } from 'react';
import './App.css';
import VocEntry from './VocEntry.js';
const logoUrl = 'Donkey.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src={logoUrl} className="App-logo" alt="logo"/>
        </nav>
        <div className="App-main">
          <header className="App-header">
            <h1 className="App-title">Donkeys bridge</h1>
          </header>
          <VocEntry/>
        </div>
      </div>
    );
  }
}

export default App;
