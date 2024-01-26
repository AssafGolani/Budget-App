import React from 'react';
import { render } from '@testing-library/react';
import ExpenseListItem from '../../component/ExpenseListItem';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseListItem with expense', () => {
  const { container } = render(<ExpenseListItem {...expenses[0]} />);
  expect(container).toMatchSnapshot();
});
