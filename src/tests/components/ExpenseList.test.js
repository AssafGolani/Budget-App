import React from 'react';
import { render } from '@testing-library/react';

import { ExpenseList } from '../../component/ExpenseList';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  const { container } = render(<ExpenseList expenses={expenses} />);
  expect(container).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const { container } = render(<ExpenseList expenses={[]} />);
  expect(container).toMatchSnapshot();
});
