import IBook from 'models/IBook';

const simpleBookMock: IBook = {
  id: 1,
  name: 'Book name',
  avaliable: true,
  image: 'path',
  description: 'Description',
};

const simpleBookWithoutImageMock: IBook = {
  id: 1,
  name: 'Book name',
  avaliable: true,
  description: 'Description',
};

const simpleBookUnavailableMock: IBook = {
  id: 1,
  name: 'Book name',
  avaliable: false,
  description: 'Description',
};

export {
  simpleBookMock,
  simpleBookWithoutImageMock,
  simpleBookUnavailableMock,
};
