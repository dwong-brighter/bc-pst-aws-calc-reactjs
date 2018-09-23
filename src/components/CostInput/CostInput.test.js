import React from 'react';
import { shallow } from 'enzyme';
import CostInput from './CostInput';

describe('<CostInput />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <CostInput
        name="someCost"
        description="some cost"
        currencyCode="USD"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
