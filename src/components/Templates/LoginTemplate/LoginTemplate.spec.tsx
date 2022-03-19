import { render } from '@testing-library/react';

import { LoginTemplate } from '.';

describe('LoginTemplate component tests', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <LoginTemplate>
        <h1>Test</h1>
      </LoginTemplate>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });
});
