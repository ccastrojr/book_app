import { render } from '@testing-library/react';

import { Forgot } from '.';

jest.mock('react-router-dom', () => {
  const useLocation = jest.fn();

  return {
    useLocation,
    Link: 'Link',
  };
});

describe('Forgot page tests', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Forgot />);

    expect(getByText('Esqueceu sua senha?')).toBeInTheDocument();
  });
});
