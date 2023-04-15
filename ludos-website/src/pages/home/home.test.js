import { render, screen } from '@testing-library/react';
import Home from './home';

test('tests landing page renders', () => {
  render(<Home />);
  const headerElement = screen.getByText(/Website coming Soon/i);
  expect(headerElement).toBeInTheDocument();
});
