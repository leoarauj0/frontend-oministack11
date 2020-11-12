/* eslint-disable no-console */
import React, { createContext, useCallback, useContext } from 'react';

// import { Container } from './styles';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvedor: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
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
