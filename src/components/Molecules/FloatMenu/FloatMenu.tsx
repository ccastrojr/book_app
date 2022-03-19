import { useEffect, useRef, useState, useCallback } from 'react';

import { handleClickOutside } from 'common/utils/handleClickOutside';

import { IFloatMenu } from './IFloatMenu';
import * as S from './styles';

function FloatMenu({ options, visible }: IFloatMenu) {
  const [optionVisible, setOptionsVisible] = useState(false);

  const wrapperRef = useRef(document.createElement('div'));
  useEffect(() => {
    handleClickOutside(wrapperRef, setOptionsVisible);
  }, [wrapperRef]);

  const handleClick = useCallback(() => {
    setOptionsVisible(true);
  }, []);

  return (
    <>
      <S.TriggerButton visible={visible} onClick={handleClick}>
        <span>...</span>
      </S.TriggerButton>

      {optionVisible && (
        <S.OptionsContainer ref={wrapperRef}>
          {options.map(item => (
            <S.Option
              type="button"
              disabled={item.disabled}
              onClick={() => item.clickEvent()}
              key={item.label}
            >
              {item.label}
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </>
  );
}

export { FloatMenu };
