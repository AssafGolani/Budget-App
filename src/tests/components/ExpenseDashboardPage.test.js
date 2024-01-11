import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../component/ExpanseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});