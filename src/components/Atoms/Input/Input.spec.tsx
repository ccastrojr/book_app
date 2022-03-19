import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('Input component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Input />);

    expect(getByTestId('pure_input')).toBeInTheDocument();
  });

  test('renders with label', () => {
    const { getByText } = render(<Input label="Test" />);

    expect(getByText('Test')).toBeInTheDocument();
  });

  test('focus and blur test', () => {
    const { getByTestId } = render(
      <div data-testid="fake_wrapper">
        <Input />
      </div>,
    );

    const wrapper = getByTestId('fake_wrapper');
    const input = getByTestId('pure_input');

    userEvent.click(input);
    userEvent.click(wrapper);
  });
});
