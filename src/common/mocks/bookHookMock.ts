import { simpleBookMock } from './simpleBookMock';

const dataMock = {
  all_books: [{ ...simpleBookMock }],
  visible_books: [{ ...simpleBookMock }],
  deleteBook: jest.fn(),
  editBook: jest.fn(),
  reserveBook: jest.fn(),
  registerBook: jest.fn(),
  searchBook: jest.fn(),
};

export { dataMock };
