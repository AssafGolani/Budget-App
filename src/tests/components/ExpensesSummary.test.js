import React from 'react';
import { render } from '@testing-library/react';
import ExpensesSummary from '../../component/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const { container } = render(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(container).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const { container } = render(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
  expect(container).toMatchSnapshot();
});
