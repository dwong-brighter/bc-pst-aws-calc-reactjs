import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import InputsFromBill from './components/InputsFromBill';
import NavigationBar from './components/NavigationBar';
import ResultsArea from './components/ResultsArea';
import TechStackInfo from './components/TechStackInfo';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  }
});

function App () {
  const classes = useStyles();

  // Initial values - these are props passed to initialize the InputsFromBill
  // component as well as to initialize our state
  const initialValues = {
    exchangeRate: 1,
    usdTotalAmount: 0,
    usdGstAmount: 0,
    cadTotalRounding: 0,
    cadGstRounding: 0
  };

  // State - these are tied to props for the ResultsArea component. The
  // InputsFromBill component calls our change handler to let us know when
  // the input values have changed, in which case we update our state and the
  // ResultsArea gets recalculated.
  const [exchangeRate, setExchangeRate] = useState(initialValues.exchangeRate);
  const [usdTotalAmount, setUsdTotalAmount] = useState(initialValues.usdTotalAmount);
  const [usdGstAmount, setUsdGstAmount] = useState(initialValues.usdGstAmount);
  const [cadTotalRounding, setCadTotalRounding] = useState(initialValues.cadTotalRounding);
  const [cadGstRounding, setCadGstRounding] = useState(initialValues.cadGstRounding);

  // Input change handlers - pass the state setters down to the child components
  // so when the child components update their values, we get told about these
  // changes.
  const inputChangeHandlers = {
    onExchangeRateChange: setExchangeRate,
    onUsdTotalAmountChange: setUsdTotalAmount,
    onUsdGstAmountChange: setUsdGstAmount,
    onCadTotalRoundingChange: setCadTotalRounding,
    onCadGstRoundingChange: setCadGstRounding,
  };

  return (
    <Box className={classes.container}>
      <NavigationBar />
      <TechStackInfo />
      <InputsFromBill
        initialValues={initialValues}
        changeHandlers={inputChangeHandlers}
      />
      <ResultsArea
        exchangeRate={exchangeRate}
        usdTotalAmount={usdTotalAmount}
        usdGstAmount={usdGstAmount}
        cadTotalRounding={cadTotalRounding}
        cadGstRounding={cadGstRounding}
      />
    </Box>
  );
}

export default App;
