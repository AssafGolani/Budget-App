import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExpenseListFilters } from '../../component/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = render(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper.container).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.rerender(
    <ExpenseListFilters
      filters={altFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
  expect(wrapper.container).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  fireEvent.change(wrapper.getByTestId('text-filter'), { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  fireEvent.change(wrapper.getByTestId('select-filter'), { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  fireEvent.change(wrapper.getByTestId('select-filter'), { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  fireEvent.change(wrapper.getByTestId('date-range-picker'), { startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  fireEvent.focus(wrapper.getByTestId('date-range-picker'));
  expect(wrapper.container.querySelector('.react-dates__input--focused').name).toBe(calendarFocused);
});
