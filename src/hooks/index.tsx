import React from 'react';

import { AutenticacaoProvedor } from './Autenticacao';
import { ToastProvedor } from './Toast';

// import { Container } from './styles';

const AppProvedor: React.FC = ({ children }) => {
  return (
    <AutenticacaoProvedor>
      <ToastProvedor>{children}</ToastProvedor>
    </AutenticacaoProvedor>
  );
};

export default AppProvedor;
