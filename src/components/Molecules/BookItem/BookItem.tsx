import { useCallback, useState } from 'react';

import not_found_image from 'common/assets/images/not-found.png';
import * as Atoms from 'components/Atoms';
import * as Molecules from 'components/Molecules';
import { useBook } from 'hooks/book';
import { useToast } from 'hooks/toast';
import IBook from 'models/IBook';

import * as S from './styles';

function BookItem({ id, image, name, avaliable, description }: IBook) {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [floatMenuVisible, setFloatMenuVisible] = useState(false);

  const { reserveBook, deleteBook } = useBook();
  const { addToast } = useToast();

  const handleReserveBook = useCallback(() => {
    reserveBook(id);
    addToast({
      title: 'Livro alugado :)',
      description: `O livro ${name} foi alugado com sucesso`,
      type: 'success',
    });
  }, [id, name, reserveBook, addToast]);

  const handleDeleteBook = useCallback(() => {
    const successDeleted = deleteBook(id);

    addToast({
      type: successDeleted ? 'info' : 'error',
      title: successDeleted
        ? 'Livro deletado com sucesso'
        : 'Este livro não pode ser deletado pois está alugado',
    });
  }, [deleteBook, id, addToast]);

  const handleOpenEditModal = useCallback(() => {
    setEditModalOpen(true);
  }, [avaliable]);

  return (
    <>
      <S.Container
        onMouseEnter={() => setFloatMenuVisible(true)}
        onMouseLeave={() => setFloatMenuVisible(false)}
        data-testid="bookitem_component"
      >
        <S.Image
          image_path={image || not_found_image}
          aria-label={`${name} book cover image`}
        />
        <S.BookTitle>{name}</S.BookTitle>

        <S.Actions>
          <Atoms.Button
            size="FULL"
            color="darken"
            disabled={!avaliable}
            onClick={handleReserveBook}
          >
            {avaliable ? 'Alugar' : 'Indisponível'}
          </Atoms.Button>

          <Atoms.Button
            size="FULL"
            color="transparent"
            onClick={() => setOpen(true)}
          >
            + Detalhes
          </Atoms.Button>
        </S.Actions>

        <Molecules.FloatMenu
          visible={floatMenuVisible}
          options={[
            {
              label: 'Editar',
              clickEvent: () => handleOpenEditModal(),
              disabled: !avaliable,
            },
            {
              label: 'Excluir',
              clickEvent: () => handleDeleteBook(),
              disabled: !avaliable,
            },
          ]}
        />
      </S.Container>

      {open && (
        <Molecules.Modal onClose={() => setOpen(false)}>
          <Molecules.BookDetails
            id={id}
            image={image}
            name={name}
            avaliable={avaliable}
            description={description}
            clickReserveBook={() => handleReserveBook()}
          />
        </Molecules.Modal>
      )}

      {editModalOpen && (
        <Molecules.Modal onClose={() => setEditModalOpen(false)}>
          <Molecules.EditBook
            id={id}
            image={image}
            name={name}
            avaliable={avaliable}
            description={description}
          />
        </Molecules.Modal>
      )}
    </>
  );
}

export { BookItem };
