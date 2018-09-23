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
  currencyAmountField: {
    margin: theme.spacing.unit,
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

class CostInput extends Component {
  state = {
    mainAmount: '0',
    cadRounding: '0',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { mainAmount, cadRounding } = this.state;
    const { classes, name, description, currencyCode } = this.props;

    var cadRoundingName = name + 'CadRounding';
    return (
      <div className={classes.container}>
        <TextField
          className={classes.currencyAmountField}
          label={description}
          value={mainAmount}
          onChange={this.handleChange('mainAmount')}
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
          onChange={this.handleChange('cadRounding')}
          id={cadRoundingName}
          InputProps={{
            inputComponent: (props) =>
              <NumberFormatCurrency currencyCode="CAD" {...props} />,
          }}
        />
      </div>
    );
  }
}

CostInput.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

export default withStyles(styles)(CostInput);
