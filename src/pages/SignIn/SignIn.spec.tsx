import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { dataMock } from 'common/mocks/authHookMock';
import * as authMock from 'hooks/auth';

import { SignIn } from '.';

jest.mock('react-router-dom', () => {
  const useLocation = jest.fn();

  return {
    useLocation,
    Link: 'Link',
  };
});
const mockSignIn = jest.fn();

describe('SignIn page tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(authMock, 'useAuth').mockReturnValue({
      ...dataMock,
    });
    const { getByText } = render(<SignIn />);

    expect(
      getByText('Faça o login para acessar sua conta no Book App'),
    ).toBeInTheDocument();
  });

  test('click to remember login', () => {
    jest.spyOn(authMock, 'useAuth').mockReturnValue({
      ...dataMock,
    });
    const { getByText } = render(<SignIn />);

    const rememberLogin = getByText('Lembrar meu login');
    userEvent.click(rememberLogin);
  });

  test('type email, password and click to login', () => {
    jest.spyOn(authMock, 'useAuth').mockReturnValue({
      ...dataMock,
      signIn: mockSignIn,
    });
    const { getByTestId, getAllByTestId } = render(<SignIn />);

    const inputs = getAllByTestId('pure_input');

    userEvent.type(inputs[0], 'test@email.com');
    userEvent.type(inputs[1], 'password');

    const login = getByTestId('login_button');
    userEvent.click(login);

    expect(mockSignIn).toBeCalled();
  });
});
