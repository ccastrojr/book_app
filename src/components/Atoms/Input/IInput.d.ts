import React, { ReactElement } from 'react';

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactElement;
  label?: string;
}

export { IInput };
