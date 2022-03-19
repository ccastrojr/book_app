import { useCallback, useState } from 'react';

import * as Atoms from 'components/Atoms';
import { useBook } from 'hooks/book';
import { useToast } from 'hooks/toast';

import * as DatailsStyle from '../BookDetails/styles';
import * as EditStyle from '../EditBook/styles';
import { IRegisterBook } from './IRegisterBook';

function RegisterBook({ onSucessfullRegister }: IRegisterBook) {
  const [bookName, setBookName] = useState<string>('');
  const [bookDescription, setBookDescription] = useState<string>('');
  const [bookImage, setBookImage] = useState<string>('');

  const { registerBook } = useBook();
  const { addToast } = useToast();

  const handleRegisterBook = useCallback(() => {
    const successRegister = registerBook({
      name: bookName,
      description: bookDescription,
      image: bookImage === '' ? undefined : bookImage,
    });

    addToast({
      type: successRegister ? 'success' : 'error',
      title: successRegister
        ? 'Livro cadastrado com sucesso'
        : 'Preencha os dados corretamente para cadastrar o livro',
    });
    onSucessfullRegister();
  }, [
    registerBook,
    bookName,
    bookDescription,
    bookImage,
    onSucessfullRegister,
  ]);

  return (
    <DatailsStyle.Container data-testid="register_book_component">
      <DatailsStyle.Header>
        <h2>Cadastrar Livro</h2>
      </DatailsStyle.Header>

      <EditStyle.Form>
        <div>
          <Atoms.Input
            id="register_bookname"
            label="Nome do Livro"
            value={bookName}
            placeholder="Nome do livro"
            onChange={e => setBookName(e.target.value)}
          />
        </div>

        <div>
          <Atoms.Input
            id="register_bookimage"
            label="URL da imagem"
            value={bookImage}
            placeholder="Imagem do livro"
            onChange={e => setBookImage(e.target.value)}
          />
        </div>

        <div>
          <Atoms.TextArea
            id="register_bookdescription"
            placeholder="Descrição do livro"
            label="Descrição do livro"
            value={bookDescription}
            onChange={e => setBookDescription(e.target.value)}
            rows={5}
          />
        </div>
      </EditStyle.Form>

      <DatailsStyle.Footer>
        <Atoms.Button
          type="button"
          size="FULL"
          color="darken"
          onClick={handleRegisterBook}
          data-testid="register_book_button_modal"
        >
          Salvar
        </Atoms.Button>
      </DatailsStyle.Footer>
    </DatailsStyle.Container>
  );
}

export { RegisterBook };
