import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageResults from './ImageResults.js';
import SearchHeader from './SearchHeader.js';

// hint Achim: see README.md

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchHeader />
        </header>
        <div className="App-intro">
          <ImageResults />
        </div>
      </div>
    );
  }
}

export default App;
