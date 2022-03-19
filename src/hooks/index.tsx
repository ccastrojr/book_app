import { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { BookProvider } from './book';
import { ToastProvider } from './toast';

interface IHooksProps {
  children: ReactNode;
}

export function Hooks({ children }: IHooksProps) {
  return (
    <AuthProvider>
      <ToastProvider>
        <BookProvider>{children}</BookProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
