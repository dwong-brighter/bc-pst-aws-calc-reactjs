import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  exchangeRateField: {
    margin: theme.spacing.unit,
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

class ExchangeRateInput extends Component {
  state = {
    rate: '1',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { rate } = this.state;
    const { classes, name, description, foreignCurrencyCode } = this.props;

    return (
      <div className={classes.container}>
        <TextField
          className={classes.exchangeRateField}
          fullWidth
          label={description}
          value={rate}
          onChange={this.handleChange('rate')}
          id={name}
          InputProps={{
            inputComponent: (props) =>
              <NumberFormatExchangeRate foreignCurrencyCode={foreignCurrencyCode} {...props} />,
          }}
        />
      </div>
    );
  }
}

ExchangeRateInput.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foreignCurrencyCode: PropTypes.string.isRequired,
};

export default withStyles(styles)(ExchangeRateInput);
