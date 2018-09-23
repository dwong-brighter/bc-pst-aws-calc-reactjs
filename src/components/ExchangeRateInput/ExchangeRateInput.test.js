import React from 'react';
import { shallow } from 'enzyme';
import ExchangeRateInput from './ExchangeRateInput';

describe('<ExchangeRateInput />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <ExchangeRateInput
        name="someRate"
        description="some exchange rate"
        foreignCurrencyCode="USD"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
