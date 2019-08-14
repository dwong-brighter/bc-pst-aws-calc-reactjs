import React from 'react';
import { shallow } from 'enzyme';

import ResultsArea from './ResultsArea.js';

describe('<ResultsArea />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ResultsArea
        exchangeRate={4.2}
        usdTotalAmount={42}
        usdGstAmount={42}
        cadTotalRounding={0.42}
        cadGstRounding={0.42}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});

