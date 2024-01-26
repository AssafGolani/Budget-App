import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EditExpensePage } from '../../component/EditExpensePage';
import { expenses } from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = render(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  fireEvent.submit(screen.getByTestId('expense-form'), { target: expenses[2] });
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  fireEvent.click(screen.getByTestId('remove-button'));
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeExpense).toHaveBeenCalledWith({ id: expenses[2].id });
});
