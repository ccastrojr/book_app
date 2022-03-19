import {
  ReactNode,
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

import { v4 as uuid } from 'uuid';

import * as Molecules from '../components/Molecules';

interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        type,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Molecules.ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used with ToastProvider');

  return context;
}

export { ToastProvider, useToast };
