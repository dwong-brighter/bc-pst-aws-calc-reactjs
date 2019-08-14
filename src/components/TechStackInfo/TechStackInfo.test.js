import React from 'react';
import { shallow } from 'enzyme';
import TechStackInfo from './TechStackInfo';

describe('<TechStackInfo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TechStackInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
