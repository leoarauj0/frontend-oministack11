import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getErroDeValidacao(err: ValidationError): Erros {
  const erroDeValidacao: Erros = {};

  err.inner.forEach((error) => {
    erroDeValidacao[error.path] = error.message;
  });

  return erroDeValidacao;
}
