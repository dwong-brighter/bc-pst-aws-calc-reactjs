import React from 'react';
import { shallow } from 'enzyme';
import ExchangeRateInput from './ExchangeRateInput';

describe('<ExchangeRateInput />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ExchangeRateInput
        name="someRate"
        description="some exchange rate"
        foreignCurrencyCode="USD"
        initialRate={4.2}
        onRateChange={Function}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
