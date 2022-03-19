import React from 'react';

interface ITextArea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
}

export { ITextArea };
