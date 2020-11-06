import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Conteudo, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Conteudo>
      <img src={logoimg} alt="CFM7" />

      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="perdido">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Conteudo>
    <Background />
  </Container>
);

export default Login;
