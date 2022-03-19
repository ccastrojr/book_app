import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from '.';

describe('Input component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<TextArea />);

    expect(getByTestId('pure_textarea')).toBeInTheDocument();
  });

  test('renders with label', () => {
    const { getByText } = render(<TextArea label="Test" />);

    expect(getByText('Test')).toBeInTheDocument();
  });

  test('focus and blur test', () => {
    const { getByTestId } = render(
      <div data-testid="fake_wrapper">
        <TextArea />
      </div>,
    );

    const wrapper = getByTestId('fake_wrapper');
    const input = getByTestId('pure_textarea');

    userEvent.click(input);
    userEvent.click(wrapper);
  });
});
