import { useLocation } from 'react-router-dom';

import routes from 'common/constants/routes';
import { MenuOption } from 'components/Atoms';

import * as S from './styles';

function MenuList() {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <MenuOption
        url={routes.DASHBOARD}
        text="Nossos livros"
        selected={pathname === routes.DASHBOARD}
      />
    </S.Container>
  );
}

export { MenuList };
