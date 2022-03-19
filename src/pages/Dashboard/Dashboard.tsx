import { useState } from 'react';

import { ReactComponent as Search } from 'common/assets/svgs/search.svg';
import * as Atoms from 'components/Atoms';
import * as Molecules from 'components/Molecules';
import * as Organisms from 'components/Organisms';
import { useBook } from 'hooks/book';

import * as S from './styles';

function Dashboard() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const { searchBook } = useBook();

  return (
    <>
      <S.Container data-testid="dashboad_page">
        <S.Title>Nossos Livros</S.Title>

        <S.SearchWrapper>
          <Atoms.Input
            type="text"
            placeholder="Pesquisar livro"
            icon={<Search />}
            onChange={event => searchBook(event.target.value)}
          />

          <Atoms.Button color="darken" size="FULL">
            Buscar
          </Atoms.Button>
        </S.SearchWrapper>

        <Atoms.Divider />

        <S.RegisterBookButtonWrapper>
          <Atoms.Button
            size="FULL"
            color="darken"
            onClick={() => setRegisterModalOpen(true)}
          >
            Cadastrar Livro
          </Atoms.Button>
        </S.RegisterBookButtonWrapper>

        <Organisms.BookList />
      </S.Container>

      {registerModalOpen && (
        <Molecules.Modal onClose={() => setRegisterModalOpen(false)}>
          <Molecules.RegisterBook
            onSucessfullRegister={() => setRegisterModalOpen(false)}
          />
        </Molecules.Modal>
      )}
    </>
  );
}

export { Dashboard };
