import { useCallback, useState } from 'react';

import not_found_image from 'common/assets/images/not-found.png';
import * as Atoms from 'components/Atoms';
import { useBook } from 'hooks/book';
import { useToast } from 'hooks/toast';
import IBook from 'models/IBook';

import * as DatailsStyle from '../BookDetails/styles';
import * as S from './styles';

function EditBook({ id, image, name, avaliable, description }: IBook) {
  const [bookName, setBookName] = useState<string>(name);
  const [bookDescription, setBookDescription] = useState<string>(description);

  const { editBook } = useBook();
  const { addToast } = useToast();

  const handleSubmitEdit = useCallback(() => {
    const successEdited = editBook({
      id,
      name: bookName,
      description: bookDescription,
    });

    addToast({
      type: successEdited ? 'info' : 'error',
      title: successEdited
        ? 'Livro editado com sucesso'
        : 'Preencha todos os dados para concluir a edição',
    });
  }, [bookName, bookDescription, avaliable, editBook, addToast]);

  return (
    <DatailsStyle.Container data-testid="edit_book_component">
      <DatailsStyle.Header>
        <h2>Editar Livro</h2>
      </DatailsStyle.Header>

      <DatailsStyle.Content>
        <DatailsStyle.BookImage
          image_path={image || not_found_image}
          aria-label={`${name} book cover image with details`}
        />

        <S.Form>
          <div>
            <Atoms.Input
              id="bookname"
              label="Nome do Livro"
              value={bookName}
              placeholder="Nome do livro"
              onChange={e => setBookName(e.target.value)}
            />
          </div>

          <div>
            <Atoms.TextArea
              id="bookdescription"
              placeholder="Descrição do livro"
              label="Descrição do livro"
              value={bookDescription}
              onChange={e => setBookDescription(e.target.value)}
              rows={5}
            />
          </div>
        </S.Form>
      </DatailsStyle.Content>

      <DatailsStyle.Footer>
        <Atoms.Button
          type="button"
          size="FULL"
          color="darken"
          onClick={handleSubmitEdit}
        >
          Salvar
        </Atoms.Button>
      </DatailsStyle.Footer>
    </DatailsStyle.Container>
  );
}

export { EditBook };
