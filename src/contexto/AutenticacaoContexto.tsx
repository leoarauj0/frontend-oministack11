import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  usuario: object;
}

interface LoginCredenciais {
  email: string;
  senha: string;
}

interface AuthContexto {
  usuario: object;
  login(credenciais: LoginCredenciais): Promise<void>;
}
const AutenticacaoContexto = createContext<AuthContexto>({} as AuthContexto);

const AutenticacaoProvedor: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarberWeb:token');
    const usuario = localStorage.getItem('@GoBarberWeb:usuario');

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, senha }) => {
    const res = await api.post('sessoes', {
      email,
      senha,
    });

    const { token, usuario } = res.data;

    localStorage.setItem('@GoBarberWeb:token', token);
    localStorage.setItem('@GoBarberWeb:usuario', JSON.stringify(usuario));

    setData({ token, usuario });

    console.log('Login ok 🤗');
    console.log(res.data);
  }, []);
  return (
    <AutenticacaoContexto.Provider value={{ usuario: data.usuario, login }}>
      {children}
    </AutenticacaoContexto.Provider>
  );
};

export { AutenticacaoContexto, AutenticacaoProvedor };
