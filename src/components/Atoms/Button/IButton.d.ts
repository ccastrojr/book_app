import { ButtonHTMLAttributes } from 'react';

interface IColors {
  color: 'default' | 'darken' | 'transparent';
}

type IButton = ButtonHTMLAttributes<HTMLButtonElement> &
  IColors & {
    size: 'FULL';
    children: ReactNode;
  };

export { IButton, IColors };
