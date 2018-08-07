import React from 'react';
import { shallow } from 'enzyme';

import ExchangeRateInput from './ExchangeRateInput.js';

it('renders without props', () => {
  shallow(<ExchangeRateInput />)
})
