import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button component tests', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <Button size="FULL" color="default">
        Test
      </Button>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });
});
