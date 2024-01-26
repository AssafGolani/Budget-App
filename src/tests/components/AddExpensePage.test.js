import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddExpensePage } from '../../component/AddExpensePage';
import { expenses } from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = render(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  fireEvent.submit(screen.getByTestId('expense-form'), { target: expenses[1] });
  expect(history.push).toHaveBeenCalledWith('/');
  expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});
