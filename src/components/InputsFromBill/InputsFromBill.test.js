import React from 'react';
import { shallow } from 'enzyme';

import InputsFromBill from './InputsFromBill.js';

it('renders without crashing', () => {
  const wrapper = shallow(
    <InputsFromBill
      initialValues={{
        exchangeRate: 4.2,
        usdTotalAmount: 42,
        usdGstAmount: 42,
        cadTotalRounding: 0.42,
        cadGstRounding: 0.42
      }}
      changeHandlers={{
        onExchangeRateChange: Function,
        onUsdTotalAmountChange: Function,
        onUsdGstAmountChange: Function,
        onCadTotalRoundingChange: Function,
        onCadGstRoundingChange: Function,
      }}
    />);
  expect(wrapper).toMatchSnapshot();
});
