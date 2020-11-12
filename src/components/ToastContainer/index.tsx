import React from 'react';

import Toast from './Toast';
import { ToastMensagens } from '../../hooks/Toast';
import { Container } from './styles';

interface toastContainerProps {
  mensagens: ToastMensagens[];
}

const ToastContainer: React.FC<toastContainerProps> = ({ mensagens }) => {
  return (
    <Container>
      {mensagens.map((mensagem) => (
        <Toast key={mensagem.id} mensagem={mensagem} />
      ))}
    </Container>
  );
};

export default ToastContainer;
