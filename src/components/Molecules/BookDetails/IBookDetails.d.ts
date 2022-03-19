import IBook from 'models/IBook';

interface IBookDetails extends IBook {
  clickReserveBook: () => void;
}

export { IBookDetails };
