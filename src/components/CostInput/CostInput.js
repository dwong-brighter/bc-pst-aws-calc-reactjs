import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  currencyAmountField: {
    margin: '0.5rem',
    minWidth: '20rem',
  }
});

/**
 * Formatter for a text field to become a currency field.
 * 
 * @param {*} props 
 */
function NumberFormatCurrency (props) {
  const { currencyCode, inputRef, onChange, ...other } = props;

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
      prefix="$"
      thousandSeparator
      decimalScale={2}
      fixedDecimalScale
      suffix={' ' + currencyCode}
    />
  );
}

NumberFormatCurrency.propTypes = {
  currencyCode: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

function CostInput(props) {
  const {
    name,
    description,
    currencyCode,
    initialMainAmount,
    initialCadRounding,
    onMainAmountChange,
    onCadRoundingChange,
  } = props;

  const classes = useStyles();

  const [mainAmount, setMainAmount] = useState(initialMainAmount);
  const [cadRounding, setCadRounding] = useState(initialCadRounding);

  let cadRoundingName = name + 'CadRounding';
  return (
    <Box className={classes.container}>
      <TextField
        className={classes.currencyAmountField}
        label={description}
        value={mainAmount}
        onChange={(event) => {
          let newAmount = parseFloat(event.target.value);
          setMainAmount(newAmount); // update our state
          onMainAmountChange(newAmount); // update the app's state
        }}
        id={name}
        InputProps={{
          inputComponent: (props) =>
            <NumberFormatCurrency currencyCode={currencyCode} {...props} />,
        }}
      />
      <TextField
        className={classes.currencyAmountField}
        label="Rounding"
        value={cadRounding}
        onChange={(event) => {
          let newRounding = parseFloat(event.target.value);
          setCadRounding(newRounding); // update our state
          onCadRoundingChange(newRounding); // update the app's state
        }}
        id={cadRoundingName}
        InputProps={{
          inputComponent: (props) =>
            <NumberFormatCurrency currencyCode="CAD" {...props} />,
        }}
      />
    </Box>
  );
}

CostInput.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  initialMainAmount: PropTypes.number.isRequired,
  initialCadRounding: PropTypes.number.isRequired,
  onMainAmountChange: PropTypes.func.isRequired,
  onCadRoundingChange: PropTypes.func.isRequired
};

export default CostInput;
