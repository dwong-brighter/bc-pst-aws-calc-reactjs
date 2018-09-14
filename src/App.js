import React, { Component } from 'react';
import InputsFromBill from './components/InputsFromBill';
import NavigationBar from './components/NavigationBar';
import ResultsArea from './components/ResultsArea';

// TODO: Use the logo in a "Tech Info" area (a TechInfo component containing an
// expansion panel)
//import logo from './logo.svg';
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
        <InputsFromBill />
        <ResultsArea data={DATA} />
      </div>
    );
  }
}

export default App;
