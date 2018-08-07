import React from 'react';
import { shallow } from 'enzyme';

import CurrencyInput from './CurrencyInput.js';

it('renders without props', () => {
  shallow(<CurrencyInput />)
})
