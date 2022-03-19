import {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

import mockBooks from 'common/mocks/mockBooks';
import IBook from 'models/IBook';

interface BookProviderProps {
  children: ReactNode;
}

interface BookData {
  all_books: IBook[];
  visible_books: IBook[];
  reserveBook(book_id: number): void;
  searchBook(search_value: string): void;
  deleteBook(book_id: number): boolean;
  editBook(book: Omit<IBook, 'image' | 'avaliable'>): boolean;
  registerBook(book: Omit<IBook, 'id' | 'avaliable'>): boolean;
}

const BookContext = createContext<BookData>({} as BookData);

function BookProvider({ children }: BookProviderProps) {
  const [all_books, setAll_books] = useState<IBook[]>([...mockBooks]);
  const [visible_books, setVisible_books] = useState<IBook[]>([]);

  useEffect(() => {
    setVisible_books([...all_books]);
  }, [all_books]);

  const reserveBook = useCallback(
    (book_id: number) => {
      const bookIndex = all_books.findIndex(el => el.id === book_id);
      const currentBooks = [...all_books];

      currentBooks[bookIndex].avaliable = false;

      setAll_books([...currentBooks]);
    },
    [all_books],
  );

  const formatString = (value: string) => {
    return value.trim().toLowerCase();
  };

  const searchBook = useCallback(
    (search_value: string) => {
      const filtredBook: IBook[] = [];

      all_books.forEach(item => {
        if (formatString(item.name).includes(formatString(search_value))) {
          filtredBook.push(item);
        }
      });

      setVisible_books([...filtredBook]);
    },
    [all_books],
  );

  const deleteBook = useCallback(
    (book_id: number): boolean => {
      const currentBooks = [...all_books];
      const index = all_books.findIndex(el => el.id === book_id);

      if (currentBooks[index].avaliable) {
        currentBooks.splice(index, 1);
        setAll_books([...currentBooks]);

        return true;
      }

      return false;
    },
    [all_books],
  );

  const editBook = useCallback(
    ({
      id,
      description,
      name,
    }: Omit<IBook, 'image' | 'avaliable'>): boolean => {
      const currentBooks = [...all_books];
      const index = all_books.findIndex(el => el.id === id);

      if (!description || !name) return false;

      currentBooks[index] = { ...currentBooks[index], description, name };
      setAll_books([...currentBooks]);

      return true;
    },
    [all_books],
  );

  const registerBook = useCallback(
    ({ image, name, description }: Omit<IBook, 'id' | 'avaliable'>) => {
      const lastId = all_books[all_books.length - 1].id;
      const id = lastId + 1;

      if (!description || !name) return false;

      setAll_books([
        ...all_books,
        { id, image, name, description, avaliable: true },
      ]);

      return true;
    },
    [all_books],
  );

  return (
    <BookContext.Provider
      value={{
        all_books,
        visible_books,
        reserveBook,
        searchBook,
        deleteBook,
        editBook,
        registerBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBook(): BookData {
  const context = useContext(BookContext);

  if (!context) throw new Error('useBook must be used with BookProvider');

  return context;
}

export { BookProvider, useBook };
