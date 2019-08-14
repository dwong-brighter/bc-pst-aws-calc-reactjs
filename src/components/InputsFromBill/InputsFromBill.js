import React from 'react';
import PropTypes from 'prop-types';
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
  const {initialValues, changeHandlers} = props;
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ExchangeRateInput
        name="exchangeRate"
        description="Exchange rate (per AWS bill)"
        foreignCurrencyCode="USD"
        initialRate={initialValues.exchangeRate}
        onRateChange={changeHandlers.onExchangeRateChange}
      />
      <CostInput 
        name="usdTotal"
        description="Total cost (per AWS bill)"
        currencyCode="USD"
        initialMainAmount={initialValues.usdTotalAmount}
        initialCadRounding={initialValues.cadTotalRounding}
        onMainAmountChange={changeHandlers.onUsdTotalAmountChange}
        onCadRoundingChange={changeHandlers.onCadTotalRoundingChange}
      />
      <CostInput
        name="usdGst"
        description="GST amount (per AWS tax bill)"
        currencyCode="USD"
        initialMainAmount={initialValues.usdGstAmount}
        initialCadRounding={initialValues.cadGstRounding}
        onMainAmountChange={changeHandlers.onUsdGstAmountChange}
        onCadRoundingChange={changeHandlers.onCadGstRoundingChange}
      />
    </Box>
  );
}

InputsFromBill.propTypes = {
  initialValues: PropTypes.object.isRequired,
  changeHandlers: PropTypes.object.isRequired
};

export default InputsFromBill;
