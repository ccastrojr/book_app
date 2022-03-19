import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type HamburgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string;
  checked: boolean;
};

function HamburgerButton({ color, checked, ...rest }: HamburgerButtonProps) {
  return (
    <S.Container color={color} {...rest} data-testid="hamburger_button">
      <input type="checkbox" checked={checked} />

      <span />
      <span />
      <span />
    </S.Container>
  );
}

export { HamburgerButton };
