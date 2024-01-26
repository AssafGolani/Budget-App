import React from 'react';
import { render } from '@testing-library/react';
import ExpenseDashboardPage from '../../component/ExpanseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
  const { container } = render(<ExpenseDashboardPage />);
  expect(container).toMatchSnapshot();
});
