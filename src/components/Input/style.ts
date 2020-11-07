import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  estaFocado: boolean;
  estaPreenchido: boolean;
  temErro: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #312e38;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #312e38;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.temErro &&
    css`
      border-color: #aa2929;
    `}
  ${(props) =>
    props.estaFocado &&
    css`
      color: #ff0000;
      border-color: #ff0000;
    `}

  ${(props) =>
    props.estaPreenchido &&
    css`
      color: #ff0000;
    `}
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #e6e6e6;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Erro = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #aa2929;
    color: #fff;

    &::before {
      border-color: #aa2929 transparent;
    }
  }
`;
