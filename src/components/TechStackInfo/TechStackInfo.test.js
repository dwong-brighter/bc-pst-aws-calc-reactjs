import React from 'react';
import { shallow } from 'enzyme';
import TechStackInfo from './TechStackInfo';

describe('<TechStackInfo />', () => {
  test('renders', () => {
    const wrapper = shallow(<TechStackInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
