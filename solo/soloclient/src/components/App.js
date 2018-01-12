import React, { Component } from 'react';
import './App.css';
import VocEntry from './VocEntry.js';
const logoUrl = 'Donkey.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoUrl} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the pleasure dome</h1>
        </header>
        <VocEntry/>
      </div>
    );
  }
}

export default App;
