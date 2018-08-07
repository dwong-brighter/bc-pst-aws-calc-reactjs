import React from 'react';
import InputDescription from '../InputDescription';

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

export default function CurrencyInput (props) {
  var mainAmountName = props.name;
  var cadRoundingName = mainAmountName + 'CadRounding';

  return (
    <div className="CurrencyInput-container">
      <div className="CurrencyInput-amount-container">
        <InputDescription description={props.description} />
        <input className="CurrencyInput-amount" id={mainAmountName} name={mainAmountName} type="text" pattern="-?\d+\.\d{2}" />
      </div>
      <div className="CurrencyInput-rounding-container">
        <InputDescription description="CAD Rounding" />
        <input className="CurrencyInput-rounding" id={cadRoundingName} name={cadRoundingName} type="text" pattern="-?\d+\.\d{2}" />
      </div>
    </div>
  );
}
