import { ReactNode } from 'react';

interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export { IModal };
