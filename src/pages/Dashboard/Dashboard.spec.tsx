import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { dataMock } from 'common/mocks/bookHookMock';
import mockAddToast from 'common/mocks/mockAddToast';
import * as bookHook from 'hooks/book';

import { Dashboard } from '.';
mockAddToast;
const mockSearchBook = jest.fn();

describe('Dashboard page tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });
    const { getByText } = render(<Dashboard />);

    expect(getByText('Nossos Livros')).toBeInTheDocument();
  });

  test('click on register book button and close modal', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });
    const { getByText, getByTestId } = render(<Dashboard />);

    const registerBook = getByText('Cadastrar Livro');
    act(() => {
      userEvent.click(registerBook);
    });

    expect(getByTestId('register_book_component')).toBeInTheDocument();

    const modalBackground = getByTestId('modal_background');
    userEvent.click(modalBackground);
  });

  test('click on register book button and save button inside modal', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });
    const { getByText, getByTestId } = render(<Dashboard />);

    const registerBook = getByText('Cadastrar Livro');
    act(() => {
      userEvent.click(registerBook);
    });

    const registerBookInsideModal = getByTestId('register_book_button_modal');
    act(() => {
      userEvent.click(registerBookInsideModal);
    });
  });

  test('type to search book', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
      searchBook: mockSearchBook,
    });
    const { getByTestId } = render(<Dashboard />);

    const searchInput = getByTestId('pure_input');
    userEvent.type(searchInput, 'test');

    expect(mockSearchBook).toBeCalled();
  });
});
