import React, { Component } from 'react';
import InputsFromBill from './components/InputsFromBill';
import ResultsArea from './components/ResultsArea';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const SAMPLE_DATA = {
      exchangeRate: 1.2,
      usdTotalAmount: 155,
      usdGstAmount: 5
    };
    
    var DATA = SAMPLE_DATA;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BC PST Calculator for AWS Billing</h1>
          <h2 className="App-subtitle">Using ReactJS</h2>
        </header>
        <p className="App-intro">
          Work in Progress! (We'll need to edit <code>src/App.js</code> and save to reload).
        </p>
        <InputsFromBill />
        <ResultsArea data={DATA} />
      </div>
    );
  }
}

export default App;
