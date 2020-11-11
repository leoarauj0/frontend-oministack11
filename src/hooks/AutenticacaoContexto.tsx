import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  usuario: object;
}

interface LoginCredenciais {
  email: string;
  senha: string;
}

interface AuthContextoData {
  usuario: object;
  login(credenciais: LoginCredenciais): Promise<void>;
  logout(): void;
}
const AutenticacaoContexto = createContext<AuthContextoData>(
  {} as AuthContextoData,
);

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

  const logout = useCallback(() => {
    localStorage.removeItem('@GoBarberWeb:token');
    localStorage.removeItem('@GoBarberWeb:usuario');

    setData({} as AuthState);
  }, []);

  return (
    <AutenticacaoContexto.Provider
      value={{ usuario: data.usuario, login, logout }}
    >
      {children}
    </AutenticacaoContexto.Provider>
  );
};

function useAuth(): AuthContextoData {
  const contexto = useContext(AutenticacaoContexto);

  if (!contexto) {
    throw new Error('useAuth deve ser usado um AutenticacaoProvedor');
  }

  return contexto;
}

export { AutenticacaoProvedor, useAuth };
