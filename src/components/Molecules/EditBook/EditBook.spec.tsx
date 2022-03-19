import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { dataMock } from 'common/mocks/bookHookMock';
import mockAddToast from 'common/mocks/mockAddToast';
import {
  simpleBookMock,
  simpleBookWithoutImageMock,
} from 'common/mocks/simpleBookMock';
import * as bookHook from 'hooks/book';

import { EditBook } from '.';
const mockEditBook = jest.fn();
mockAddToast;

describe('EditBook component basic tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(<EditBook {...simpleBookMock} />);

    expect(getByTestId('edit_book_component')).toBeInTheDocument();
  });

  test('renders without book image', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(
      <EditBook {...simpleBookWithoutImageMock} />,
    );

    expect(getByTestId('edit_book_component')).toBeInTheDocument();
  });

  test('click to save edit', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
      editBook: mockEditBook,
    });

    const { getByText } = render(<EditBook {...simpleBookMock} />);

    fireEvent.click(getByText('Salvar'));
    expect(mockEditBook).toBeCalled();
  });

  test('type in input and textarea', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(<EditBook {...simpleBookMock} />);

    const input = getByTestId('pure_input');
    const textarea = getByTestId('pure_textarea');

    userEvent.type(input, 'test input');
    userEvent.type(textarea, 'test textarea');
  });
});
