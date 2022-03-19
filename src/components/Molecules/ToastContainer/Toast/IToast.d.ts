import { CSSProperties } from 'react';

import { ToastMessage } from '../../../../hooks/toast';

interface IToast {
  message: ToastMessage;
  styleAnimation: CSSProperties;
}

export { IToast };
