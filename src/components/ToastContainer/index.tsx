import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastMensagens } from '../../hooks/Toast';
import { Container } from './styles';

interface toastContainerProps {
  mensagens: ToastMensagens[];
}

const ToastContainer: React.FC<toastContainerProps> = ({ mensagens }) => {
  const mensagensComTransicao = useTransition(
    mensagens,
    (mensagem) => mensagem.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {mensagensComTransicao.map(({ item, key, props }) => (
        <Toast key={key} style={props} mensagem={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
