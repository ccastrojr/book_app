import { render } from '@testing-library/react';

import { Checkbox } from '.';

describe('Checkbox component tests', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <Checkbox
        data={{ name: 'Test Checkbox', selected: false }}
        description="Test"
      />,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  test('renders without description', () => {
    const { getByTestId } = render(
      <Checkbox data={{ name: 'Test Checkbox', selected: false }} />,
    );

    expect(getByTestId('checkbox_component')).toBeInTheDocument();
  });
});
