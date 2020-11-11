import React from 'react';

import Login from './pages/Login';
// import CriarConta from './pages/CriarConta';
import GlobalStyle from './styles/global';

import { AutenticacaoProvedor } from './hooks/AutenticacaoContexto';

const App: React.FC = () => (
  <>
    <AutenticacaoProvedor>
      <Login />
    </AutenticacaoProvedor>
    <GlobalStyle />
  </>
);

export default App;
