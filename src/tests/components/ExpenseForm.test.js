import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseForm from '../../component/ExpenseForm';
import { expenses } from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
  const { container } = render(<ExpenseForm />);
  expect(container).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const { container } = render(<ExpenseForm expense={expenses[1]} />);
  expect(container).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const { container } = render(<ExpenseForm />);
  expect(container).toMatchSnapshot();
  fireEvent.submit(screen.getByTestId('expense-form'));
  expect(screen.getByTestId('error').textContent.length).toBeGreaterThan(0);
  expect(container).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const { container } = render(<ExpenseForm />);
  fireEvent.change(screen.getByTestId('description-input'), { target: { value } });
  expect(screen.getByTestId('description-input').value).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New note';
  const { container } = render(<ExpenseForm />);
  fireEvent.change(screen.getByTestId('note-textarea'), { target: { value } });
  expect(screen.getByTestId('note-textarea').value).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '23.50';
  const { container } = render(<ExpenseForm />);
  fireEvent.change(screen.getByTestId('amount-input'), { target: { value } });
  expect(screen.getByTestId('amount-input').value).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = '12.122';
  const { container } = render(<ExpenseForm />);
  fireEvent.change(screen.getByTestId('amount-input'), { target: { value } });
  expect(screen.getByTestId('amount-input').value).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const { container } = render(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  fireEvent.submit(screen.getByTestId('expense-form'));
  expect(screen.getByTestId('error').textContent).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt.valueOf(),
    note: expenses[0].note,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const { container } = render(<ExpenseForm />);
  fireEvent.change(screen.getByTestId('date-picker'), now.format('YYYY-MM-DD'));
  expect(screen.getByTestId('date-picker').value).toBe(now.format('YYYY-MM-DD'));
});

test('should set calendar focus on change', () => {
  const focused = true;
  const { container } = render(<ExpenseForm />);
  fireEvent.focus(screen.getByTestId('date-picker'));
  expect(screen.getByTestId('date-picker').classList.contains('react-datepicker__input')).toBe(true);
});
