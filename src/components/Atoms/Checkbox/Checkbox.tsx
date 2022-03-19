import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  data: {
    name: string;
    selected: boolean;
  };
}

function Checkbox({ description, data, disabled, ...rest }: CheckboxProps) {
  return (
    <S.Container disabled={disabled} data-testid="checkbox_component">
      {description}
      <input
        type="checkbox"
        name={data.name}
        checked={data.selected}
        {...rest}
      />
      <span className="checkmark" />
    </S.Container>
  );
}

export { Checkbox };
