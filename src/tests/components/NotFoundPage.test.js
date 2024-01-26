import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../../component/NotFoundPage';

test('should render NotFoundPage correctly', () => {
  const { container } = render(<NotFoundPage />);
  expect(container).toMatchSnapshot();
});
