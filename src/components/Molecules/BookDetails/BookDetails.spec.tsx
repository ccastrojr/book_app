import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  simpleBookMock,
  simpleBookWithoutImageMock,
  simpleBookUnavailableMock,
} from 'common/mocks/simpleBookMock';

import { BookDetails } from '.';

const mockReserveBook = jest.fn();

describe('BookDetails component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <BookDetails {...simpleBookMock} clickReserveBook={mockReserveBook} />,
    );

    expect(getByTestId('book_details_component')).toBeInTheDocument();
  });

  test('renders without image', () => {
    const { getByTestId } = render(
      <BookDetails
        {...simpleBookWithoutImageMock}
        clickReserveBook={mockReserveBook}
      />,
    );

    expect(getByTestId('book_details_component')).toBeInTheDocument();
  });

  test('renders unavailable book', () => {
    const { getByTestId } = render(
      <BookDetails
        {...simpleBookUnavailableMock}
        clickReserveBook={mockReserveBook}
      />,
    );

    expect(getByTestId('book_details_component')).toBeInTheDocument();
  });

  test('click to reserve book', () => {
    const { getByText } = render(
      <BookDetails {...simpleBookMock} clickReserveBook={mockReserveBook} />,
    );

    const button = getByText('Alugar');
    userEvent.click(button);

    expect(mockReserveBook).toBeCalled();
  });
});
