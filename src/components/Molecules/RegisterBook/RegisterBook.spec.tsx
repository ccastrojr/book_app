import { render, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { dataMock } from 'common/mocks/bookHookMock';
import mockAddToast from 'common/mocks/mockAddToast';
import { simpleBookMock } from 'common/mocks/simpleBookMock';
import * as bookHook from 'hooks/book';

import { RegisterBook } from '.';
const mockRegisterBook = jest.fn();
mockAddToast;

describe('RegisterBook component basic tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(
      <RegisterBook {...simpleBookMock} onSucessfullRegister={jest.fn()} />,
    );

    expect(getByTestId('register_book_component')).toBeInTheDocument();
  });

  test('click to register', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
      registerBook: mockRegisterBook,
    });

    const { getByText } = render(
      <RegisterBook {...simpleBookMock} onSucessfullRegister={jest.fn()} />,
    );

    fireEvent.click(getByText('Salvar'));
    expect(mockRegisterBook).toBeCalled();
  });

  test('type in input and textarea', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId, getAllByTestId } = render(
      <RegisterBook {...simpleBookMock} onSucessfullRegister={jest.fn()} />,
    );

    const inputs = getAllByTestId('pure_input');
    const textarea = getByTestId('pure_textarea');

    userEvent.type(inputs[0], 'test input');
    userEvent.type(inputs[1], 'test url image');
    userEvent.type(textarea, 'test textarea');
  });
});
