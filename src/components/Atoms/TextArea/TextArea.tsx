import { useState, useCallback } from 'react';

import { ITextArea } from './ITextArea';
import * as S from './styles';

function TextArea({ id, label, ...rest }: ITextArea) {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Container focused={focused}>
        <textarea
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={id}
          data-testid="pure_textarea"
        />
      </S.Container>
    </>
  );
}
export { TextArea };
