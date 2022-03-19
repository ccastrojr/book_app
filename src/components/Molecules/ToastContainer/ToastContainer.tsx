import { useTransition } from 'react-spring';

import { IToastContainer } from './IToastContainer';
import * as S from './styles';
import { Toast } from './Toast';

function ToastContainer({ messages }: IToastContainer) {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateX(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateX(360deg)' },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} styleAnimation={props} message={item} />
      ))}
    </S.Container>
  );
}

export { ToastContainer };
