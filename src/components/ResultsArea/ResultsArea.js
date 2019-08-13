import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import CalcEngine from '../../helpers/CalcEngine';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'lightblue',
    borderRadius: '0.5rem',
    display: 'block',
    margin: '1.5rem 1rem',
    padding: '0.5rem 1rem',
    textAlign: 'left',
  }
});

function ResultsArea (props) {
  const {exchangeRate, usdTotalAmount, usdGstAmount} = props.data;
  const classes = useStyles();
  const usdNetAmount = CalcEngine.calculateUsdNetCost(usdTotalAmount, usdGstAmount);
  const usdNetAmountGstAndPstTaxable = CalcEngine.calculateUsdNetCostSubjectToGstAndPst(usdGstAmount);
  const usdNetAmountOnlyPstTaxable = CalcEngine.calculateUsdNetCostSubjectToPstOnly(usdTotalAmount, usdGstAmount);
  const usdPstAmount = CalcEngine.calculateUsdPst(usdTotalAmount, usdGstAmount);

  return (
    <Box className={classes.container}>
      <p>USD to CAD Exchange Rate is <strong>{exchangeRate.toFixed(14)}</strong></p>
      <p>USD Total of <strong>${usdTotalAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdTotalAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Price Subject to GST and PST of <strong>${usdNetAmountGstAndPstTaxable.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmountGstAndPstTaxable, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Price Subject to PST only of <strong>${usdNetAmountOnlyPstTaxable.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmountOnlyPstTaxable, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Cost of (all subject to PST) <strong>${usdNetAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD GST of <strong>${usdGstAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdGstAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD PST to Self-Assess of <strong>${usdPstAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdPstAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
    </Box>
  );
}

export default ResultsArea;

