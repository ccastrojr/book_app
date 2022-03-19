import { IButton } from './IButton';
import * as S from './styles';

function Button({ size, color, children, ...rest }: IButton) {
  return (
    <S.Container size={size} color={color} {...rest}>
      {children}
    </S.Container>
  );
}

export { Button };
