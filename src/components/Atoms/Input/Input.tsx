import { useState, useCallback } from 'react';

import { IInput } from './IInput';
import * as S from './styles';

function Input({ icon, id, label, ...rest }: IInput) {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Container focused={focused}>
        {!!icon && icon}
        <input
          {...rest}
          data-testid="pure_input"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          id={id}
        />
      </S.Container>
    </>
  );
}
export { Input };
