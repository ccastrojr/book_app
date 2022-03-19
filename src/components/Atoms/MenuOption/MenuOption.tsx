import { IMenuOption } from './IMenuOption';
import * as S from './styles';

function MenuOption({ text, url, selected }: IMenuOption) {
  return (
    <S.Container to={url} selected={selected}>
      {text}
    </S.Container>
  );
}

export { MenuOption };
