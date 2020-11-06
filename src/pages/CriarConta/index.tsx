import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Conteudo, Background } from './styles';

const CriarConta: React.FC = () => (
  <Container>
    <Background />
    <Conteudo>
      <img src={logoimg} alt="CFM7" />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="nome" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Conteudo>
  </Container>
);

export default CriarConta;
