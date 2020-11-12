import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'sucesso' | 'erro' | 'info';
  temDescricao: boolean;
}
export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

// ------------------------------------------------------------

const toastTypeVariacoes = {
  info: css`
    > svg {
      color: #1871f5;
    }
  `,
  // -------------------------------
  sucesso: css`
    > svg {
      color: #01df26;
      opacity: 0.8;
    }
  `,
  // -------------------------------
  erro: css`
    > svg {
      color: #ff0000;
      opacity: 0.8;
    }
  `,
};

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #000;
  color: #fff;

  & + div {
    margin-top: 8px;
  }

  /* > indica que é o svg diretamente dentro do toast */
  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 16px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => toastTypeVariacoes[props.type || 'info']}

  ${(props) =>
    !props.temDescricao &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
