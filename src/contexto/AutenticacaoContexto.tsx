import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface LoginCredenciais {
  email: string;
  senha: string;
}

interface AuthContexto {
  nome: string;
  login(credenciais: LoginCredenciais): Promise<void>;
}
export const AutenticacaoContexto = createContext<AuthContexto>(
  {} as AuthContexto,
);

export const AutenticacaoProvedor: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, senha }) => {
    const res = await api.post('sessoes', {
      email,
      senha,
    });
    console.log('Login ok 🤗');
    console.log(res.data);
  }, []);
  return (
    <AutenticacaoContexto.Provider value={{ nome: 'Léo', login }}>
      {children}
    </AutenticacaoContexto.Provider>
  );
};
