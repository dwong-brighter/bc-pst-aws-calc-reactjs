import React from 'react';
import ExchangeRateInput from '../ExchangeRateInput';
import CostInput from '../CostInput';

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
      <ExchangeRateInput name="exchangeRate" description="Exchange rate (per AWS bill)" foreignCurrencyCode="USD" />
      <CostInput name="usdTotal" description="Total cost (per AWS bill)" currencyCode="USD" />
      <CostInput name="usdGst" description="GST amount (per AWS tax bill)" currencyCode="USD" />
    </div>
  );
}
