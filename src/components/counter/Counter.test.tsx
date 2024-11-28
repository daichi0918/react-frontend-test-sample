import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders collectly', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });
});
