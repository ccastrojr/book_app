import * as Molecules from 'components/Molecules';
import { useBook } from 'hooks/book';

import * as S from './styles';

function BookList() {
  const { visible_books } = useBook();

  return (
    <>
      {visible_books.length > 0 ? (
        <S.Container>
          {visible_books.map(item => (
            <Molecules.BookItem {...item} key={item.id} />
          ))}
        </S.Container>
      ) : (
        <S.NoBookMessage>Não há livros para serem exibidos</S.NoBookMessage>
      )}
    </>
  );
}

export { BookList };
