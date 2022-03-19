import not_found_image from 'common/assets/images/not-found.png';
import * as Atoms from 'components/Atoms';

import { IBookDetails } from './IBookDetails';
import * as S from './styles';

function BookDetails({
  image,
  name,
  avaliable,
  description,
  clickReserveBook,
}: IBookDetails) {
  return (
    <S.Container data-testid="book_details_component">
      <S.Header>
        <h2>Detalhes do livro</h2>
      </S.Header>

      <S.Content>
        <S.BookImage
          image_path={image || not_found_image}
          aria-label={`${name} book cover image with details`}
        />

        <S.BookData>
          <h3>{name}</h3>
          <p>{description}</p>
        </S.BookData>
      </S.Content>

      <S.Footer>
        <Atoms.Button
          size="FULL"
          color="darken"
          disabled={!avaliable}
          onClick={() => clickReserveBook()}
          data-testid="reserve_inside_detail_modal"
        >
          {avaliable ? 'Alugar' : 'Indisponível'}
        </Atoms.Button>
      </S.Footer>
    </S.Container>
  );
}

export { BookDetails };
