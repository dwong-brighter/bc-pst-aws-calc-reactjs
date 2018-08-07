import React from 'react';
import ExchangeRateInput from '../ExchangeRateInput';
import CurrencyInput from '../CurrencyInput';

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

export default function InputsFromBill (props) {
  return (
    <div className="InputsFromBill-container">
      <ExchangeRateInput name="exchangeRate" description="USD to CAD exchange rate (per AWS bill)" />
      <CurrencyInput name="usdTotal" description="USD total cost (per AWS bill)" />
      <CurrencyInput name="usdGst" description="USD GST amount (per AWS tax bill)" />
    </div>
  );
}
