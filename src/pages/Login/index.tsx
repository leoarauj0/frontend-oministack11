import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { useAuth } from '../../hooks/Autenticacao';
import { useToast } from '../../hooks/Toast';

import pegarErroDeValidacao from '../../utils/pegarErroDeValidacao';

import logoimg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Conteudo, Background } from './styles';

interface formDadosLogin {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // const { usuario, login } = useAuth();
  // console.log(usuario);

  const { login } = useAuth();

  const { addToast, removeToast } = useToast();

  const handleSubmit = useCallback(
    async (data: formDadosLogin) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          senha: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false, // para ele mostrar todos os erros que encontrar e não apenas o primeiro
        });

        await login({
          email: data.email,
          senha: data.senha,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = pegarErroDeValidacao(err);
          formRef.current?.setErrors(errors);
        }

        // disparar um toast
        addToast({
          type: 'erro',
          title: 'Erro na autenticação.',
          descricao: 'Erro ao fazer login. Cheque suas credenciais.',
        });
      }
    },
    [login, addToast],
  );

  return (
    <Container>
      <Conteudo>
        <img src={logoimg} alt="CFM7" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="senha"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="perdido">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Conteudo>
      <Background />
    </Container>
  );
};

export default Login;
