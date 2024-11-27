import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  test('renders correctly', () => {
    render(<Contact />);

    const h1Text = screen.getByRole('heading', {
      name: 'お問い合わせフォーム',
    });
    expect(h1Text).toBeInTheDocument;

    const paragraphText =
      screen.getByText('すべてのフィールドは必須項目です。');
    expect(paragraphText).toBeInTheDocument;

    const nameElement = screen.getByRole('textbox', {
      name: 'お名前',
    });
    expect(nameElement).toBeInTheDocument;

    const nameElement2 = screen.getByLabelText('お名前');
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('フルネーム');
    expect(nameElement3).toBeInTheDocument();

    const emailElement = screen.getByRole('textbox', {
      name: 'メールアドレス',
    });
    expect(emailElement).toBeInTheDocument;

    const questionsElement = screen.getByRole('combobox');
    expect(questionsElement).toBeInTheDocument;

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument;

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument;
  });
});
