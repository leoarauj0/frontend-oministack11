import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import loginBackImg from '../../assets/login.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const aparecerDaDireita = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimacaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${aparecerDaDireita} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #e6e6e6;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#e6e6e6')};
      }
    }
  }

  > a {
    color: #ff0000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff0000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackImg}) no-repeat center;
  background-size: cover;
`;
