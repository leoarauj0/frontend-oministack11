import React from 'react';

import Login from './pages/Login';
// import CriarConta from './pages/CriarConta';
import GlobalStyle from './styles/global';

import AppProvedor from './hooks';

const App: React.FC = () => (
  <>
    <AppProvedor>
      <Login />
    </AppProvedor>

    <GlobalStyle />
  </>
);

export default App;
