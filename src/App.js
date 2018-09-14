import React, { Component } from 'react';
import InputsFromBill from './components/InputsFromBill';
import NavigationBar from './components/NavigationBar';
import ResultsArea from './components/ResultsArea';
import TechStackInfo from './components/TechStackInfo';

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
      <div>
        <NavigationBar />
        <TechStackInfo />
        <InputsFromBill />
        <ResultsArea data={DATA} />
      </div>
    );
  }
}

export default App;
