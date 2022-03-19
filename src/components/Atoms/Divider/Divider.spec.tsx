import { render } from '@testing-library/react';

import { Divider } from '.';

describe('Divider component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Divider />);

    expect(getByTestId('divider_component')).toBeInTheDocument();
  });
});
