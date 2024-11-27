import { render, screen } from '@testing-library/react';
import Greet from './Greet';
import { text } from 'stream/consumers';

// test('挨拶', () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name={'ShinCode'} />);
    const textElement = screen.getByText('Hello ShinCode');
    expect(textElement).toBeInTheDocument();
  });
});
