import { useEffect } from 'react';

import { ReactComponent as CheckIcon } from 'common/assets/svgs/check_outline.svg';
import { ReactComponent as CloseIcon } from 'common/assets/svgs/close.svg';
import { ReactComponent as ErrorIcon } from 'common/assets/svgs/error.svg';
import { ReactComponent as InfoIcon } from 'common/assets/svgs/info.svg';
import { colors } from 'common/styles/theme';
import { useToast } from 'hooks/toast';

import { IToast } from './IToast';
import * as S from './styles';

function Toast({ message, styleAnimation }: IToast) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 7500);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <S.Container
      type={message.type}
      hasdescription={message.description ? '1' : '0'}
      style={styleAnimation}
    >
      {message.type === 'success' && (
        <CheckIcon fill={colors.success} data-testid="notification-icon" />
      )}
      {message.type === 'error' && (
        <ErrorIcon fill={colors.error} data-testid="notification-icon" />
      )}
      {(!message.type || message.type === 'info') && (
        <InfoIcon
          fill={colors.info}
          stroke={colors.info}
          data-testid="notification-icon"
        />
      )}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        onClick={() => removeToast(message.id)}
        data-testid="button-remove"
      >
        <CloseIcon data-testid="close-toast-icon" />
      </button>
    </S.Container>
  );
}

export { Toast };
