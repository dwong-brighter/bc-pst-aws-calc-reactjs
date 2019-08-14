import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

describe('<NavigationBar />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
