import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import pegarErroDeValidacao from '../../utils/pegarErroDeValidacao';

import logoimg from '../../assets/logo.svg';

import { useToast } from '../../hooks/Toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Conteudo, Background, AnimacaoContainer } from './styles';

interface CriarContaFormData {
  nome: string;
  email: string;
  senha: string;
}

const CriarConta: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CriarContaFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          senha: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false, // para ele mostrar todos os erros que encontrar e não apenas o primeiro
        });

        await api.post('/usuarios', data);

        history.push('/');

        addToast({
          type: 'sucesso',
          title: 'Cadastro realizado!',
          descricao: 'Você já pode fazer seu login!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = pegarErroDeValidacao(err);
          formRef.current?.setErrors(errors);

          return;
        }

        // disparar um toast
        addToast({
          type: 'erro',
          title: 'Erro na cadastro.',
          descricao: 'Erro ao fazer seu cadastro. Tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Conteudo>
        <AnimacaoContainer>
          <img src={logoimg} alt="CFM7" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="nome" icon={FiUser} type="text" placeholder="Nome" />
            <Input name="email" icon={FiMail} type="text" placeholder="Email" />
            <Input
              name="senha"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimacaoContainer>
      </Conteudo>
    </Container>
  );
};

export default CriarConta;
