import { render, screen } from '@testing-library/react';
import Greet from './Greet';
import { text } from 'stream/consumers';

test('挨拶', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
