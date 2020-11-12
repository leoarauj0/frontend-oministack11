/* eslint-disable no-console */
import React, { createContext, useCallback, useContext, useState } from 'react';

import { uuid } from 'uuidv4';

// import { Container } from './styles';

import ToastContainer from '../components/ToastContainer';

export interface ToastMensagens {
  id: string;
  type?: 'sucesso' | 'erro' | 'info';
  title: string;
  descricao?: string;
}

interface ToastContextData {
  addToast(mensagem: Omit<ToastMensagens, 'id'>): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvedor: React.FC = ({ children }) => {
  const [mensagens, setMensagens] = useState<ToastMensagens[]>([]);

  const addToast = useCallback(
    ({ type, title, descricao }: Omit<ToastMensagens, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        descricao,
      };

      // quando passamos uma função recebemso por parametro os valores antigos... qu é o que estamos querendo aqui nas mensagens antigas
      setMensagens((mensagensAntigas) => [...mensagensAntigas, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    // pega todas as mensagens antigas menos a que tem o mesmo id passado e coloca no SetMensagens.
    setMensagens((state) => state.filter((mensagem) => mensagem.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer mensagens={mensagens} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado com um ToastProvider');
  }

  return context;
}
export { ToastProvedor, useToast };
