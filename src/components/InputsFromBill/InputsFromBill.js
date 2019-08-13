import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ExchangeRateInput from '../ExchangeRateInput';
import CostInput from '../CostInput';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'palegreen',
    borderColor: 'black',
    borderRadius: '0.5rem',
    borderWidth: '0.5rem',
    display: 'grid',
    margin: '1rem',
    padding: '1rem',
  }
});

function InputsFromBill (props) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ExchangeRateInput name="exchangeRate" description="Exchange rate (per AWS bill)" foreignCurrencyCode="USD" />
      <CostInput name="usdTotal" description="Total cost (per AWS bill)" currencyCode="USD" />
      <CostInput name="usdGst" description="GST amount (per AWS tax bill)" currencyCode="USD" />
    </Box>
  );
}

export default InputsFromBill;
