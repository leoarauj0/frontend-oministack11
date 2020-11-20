import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { ToastMensagens, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  mensagem: ToastMensagens;
  style: object;
}

const icones = {
  info: <FiInfo size={24} />,
  erro: <FiAlertCircle size={24} />,
  sucesso: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ mensagem, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const tempo = setTimeout(() => {
      removeToast(mensagem.id);
    }, 10000);

    // se o compontente deixar de existir ( for excluido com o usuario fechando o toast por ex ) essa função é executada automaticamente
    return () => {
      clearTimeout(tempo);
    };
  }, [mensagem.id, removeToast]);

  return (
    <Container
      type={mensagem.type}
      temDescricao={!!mensagem.descricao}
      style={style}
    >
      {icones[mensagem.type || 'info']}

      <div>
        <strong>{mensagem.title}</strong>
        {mensagem.descricao && <p>{mensagem.descricao}</p>}
      </div>
      {/* cria-se uma função pois se somente passar o id ele vai executar no momento que criar esse componente */}
      <button onClick={() => removeToast(mensagem.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
