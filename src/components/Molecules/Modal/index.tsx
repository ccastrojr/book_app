import { ReactComponent as CloseButton } from 'common/assets/svgs/close.svg';

import { IModal } from './IModal';
import * as S from './styles';

function Modal({ children, onClose }: IModal) {
  return (
    <>
      <S.Container onClick={() => onClose()} data-testid="modal_background" />

      <S.Content data-testid="modal_content">
        <S.Header>
          <button type="button" onClick={() => onClose()}>
            <CloseButton />
          </button>
        </S.Header>

        {children}
      </S.Content>
    </>
  );
}

export { Modal };
