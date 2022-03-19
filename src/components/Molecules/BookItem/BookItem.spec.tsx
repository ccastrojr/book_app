import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { dataMock } from 'common/mocks/bookHookMock';
import mockAddToast from 'common/mocks/mockAddToast';
import { simpleBookMock } from 'common/mocks/simpleBookMock';
import * as bookHook from 'hooks/book';

import { BookItem } from '.';

const mockReserveBook = jest.fn();
mockAddToast;

describe('BookItem component basic tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(<BookItem {...simpleBookMock} />);

    expect(getByTestId('bookitem_component')).toBeInTheDocument();
  });

  test('mouse events tests', () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByTestId } = render(<BookItem {...simpleBookMock} />);

    const container = getByTestId('bookitem_component');

    fireEvent.mouseEnter(container);
    fireEvent.mouseLeave(container);
  });
});

describe('BookItem modal iterations tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('open and close detail modal', async () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByText, getByTestId } = render(<BookItem {...simpleBookMock} />);

    // opening modal
    const detailButton = getByText('+ Detalhes');
    fireEvent.click(detailButton);

    await waitFor(() => {
      expect(getByTestId('book_details_component')).toBeInTheDocument();
    });

    // closing modal
    const backgroundModalContainer = getByTestId('modal_background');
    fireEvent.click(backgroundModalContainer);
  });

  test('reserve book inside modal', async () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
      reserveBook: mockReserveBook,
    });

    const { getByText, getByTestId } = render(<BookItem {...simpleBookMock} />);

    // opening modal
    const detailButton = getByText('+ Detalhes');
    fireEvent.click(detailButton);

    // click to reserve book
    const reserveButton = getByTestId('reserve_inside_detail_modal');
    act(() => {
      fireEvent.click(reserveButton);
    });

    expect(mockReserveBook).toBeCalled();
  });
});

describe('Floatmenu tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('mouse enter on component, click to open edit modal and close on final', async () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByText, getByTestId } = render(<BookItem {...simpleBookMock} />);

    const container = getByTestId('bookitem_component');
    fireEvent.mouseEnter(container);

    const dotsButton = getByText('...');
    fireEvent.click(dotsButton);

    const editModalButton = getByText('Editar');
    act(() => {
      fireEvent.click(editModalButton);
    });

    await waitFor(() => {
      expect(getByText('Editar Livro')).toBeInTheDocument();
    });

    // closing modal
    const backgroundModalContainer = getByTestId('modal_background');
    fireEvent.click(backgroundModalContainer);
  });

  test('mouse enter on component, click to delete a book and close on final', async () => {
    jest.spyOn(bookHook, 'useBook').mockReturnValue({
      ...dataMock,
    });

    const { getByText, getByTestId } = render(<BookItem {...simpleBookMock} />);

    const container = getByTestId('bookitem_component');
    fireEvent.mouseEnter(container);

    const dotsButton = getByText('...');
    fireEvent.click(dotsButton);

    const deletButton = getByText('Excluir');
    act(() => {
      fireEvent.click(deletButton);
    });
  });
});
