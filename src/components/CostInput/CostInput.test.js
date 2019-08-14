import React from 'react';
import { shallow } from 'enzyme';
import CostInput from './CostInput';

describe('<CostInput />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CostInput
        name="someCost"
        description="some cost"
        currencyCode="USD"
        initialMainAmount={42}
        initialCadRounding={0.42}
        onMainAmountChange={Function}
        onCadRoundingChange={Function}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
