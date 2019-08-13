import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  exchangeRateField: {
    margin: '0.5rem',
    maxWidth: '50%',
  }
});

/**
 * Formatter for a text field to become an exchange rate field.
 * 
 * @param {*} props 
 */
function NumberFormatExchangeRate (props) {
  const { foreignCurrencyCode, inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      decimalScale={13}
      fixedDecimalScale
      suffix={' CAD to 1 ' + foreignCurrencyCode}
    />
  );
}

NumberFormatExchangeRate.propTypes = {
  foreignCurrencyCode: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

function ExchangeRateInput(props) {
  const { name, description, foreignCurrencyCode } = props;
  const classes = useStyles();
  const [rate, setRate] = useState(1);

  return (
    <TextField
      className={classes.exchangeRateField}
      label={description}
      value={rate}
      onChange={(event) => setRate(event.target.value)}
      id={name}
      InputProps={{
        inputComponent: (props) =>
          <NumberFormatExchangeRate foreignCurrencyCode={foreignCurrencyCode} {...props} />,
      }}
    />
  );
}

ExchangeRateInput.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foreignCurrencyCode: PropTypes.string.isRequired,
};

export default ExchangeRateInput;