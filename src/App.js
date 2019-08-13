import React from 'react';
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

function App() {
  const classes = useStyles();
  const SAMPLE_DATA = {
    exchangeRate: 1.2,
    usdTotalAmount: 155,
    usdGstAmount: 5
  };

  let DATA = SAMPLE_DATA;

  return (
    <Box className={classes.container}>
      <NavigationBar />
      <TechStackInfo />
      <InputsFromBill />
      <ResultsArea data={DATA} />
    </Box>
  );
}

export default App;
