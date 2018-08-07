import React from 'react';
import { shallow } from 'enzyme';

import ResultsArea from './ResultsArea.js';

it('needs props to render', () => {
  const TEST_DATA = {
    exchangeRate: 1.2,
    usdTotalAmount: 155,
    usdGstAmount: 5
  };

  shallow(<ResultsArea data={TEST_DATA} />);
});
