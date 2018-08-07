import React from 'react';
import CalcEngine from '../../helpers/CalcEngine';

/*
Can't do the following at the moment due to
https://github.com/webpack-contrib/sass-loader/issues/206
and
https://github.com/danedavid/react-redux-boilerplate/issues/1
import style from './style.css';

And then in the code you would have
<theElement className={style.theStyle}></theElement>
*/
import './style.css';

export default function ResultsArea (props) {
  const {exchangeRate, usdTotalAmount, usdGstAmount} = props.data;
  const usdNetAmount = CalcEngine.calculateUsdNetCost(usdTotalAmount, usdGstAmount);
  const usdNetAmountGstAndPstTaxable = CalcEngine.calculateUsdNetCostSubjectToGstAndPst(usdGstAmount);
  const usdNetAmountOnlyPstTaxable = CalcEngine.calculateUsdNetCostSubjectToPstOnly(usdTotalAmount, usdGstAmount);
  const usdPstAmount = CalcEngine.calculateUsdPst(usdTotalAmount, usdGstAmount);

  return (
    <div className='ResultsArea-container'>
      <p>USD to CAD Exchange Rate is <strong>{exchangeRate.toFixed(14)}</strong></p>
      <p>USD Total of <strong>${usdTotalAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdTotalAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Price Subject to GST and PST of <strong>${usdNetAmountGstAndPstTaxable.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmountGstAndPstTaxable, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Price Subject to PST only of <strong>${usdNetAmountOnlyPstTaxable.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmountOnlyPstTaxable, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD Net Cost of (all subject to PST) <strong>${usdNetAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdNetAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD GST of <strong>${usdGstAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdGstAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
      <p>USD PST to Self-Assess of <strong>${usdPstAmount.toFixed(2)}</strong> is <strong>${CalcEngine.convertUsdToCad(usdPstAmount, exchangeRate).toFixed(2)}</strong> CAD</p>
    </div>
  );
}
