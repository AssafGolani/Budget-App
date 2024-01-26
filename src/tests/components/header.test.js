import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../component/Header';

test('should render Header correctly', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
