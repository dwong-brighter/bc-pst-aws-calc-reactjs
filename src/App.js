import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BC PST Calculator for AWS Billing</h1>
          <h2 className="App-subtitle">Using ReactJS</h2>
        </header>
        <p className="App-intro">
          Coming Soon! (We'll need to edit <code>src/App.js</code> and save to reload).
        </p>
      </div>
    );
  }
}

export default App;
