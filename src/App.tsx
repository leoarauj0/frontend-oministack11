import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvedor from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvedor>
      <Routes />
    </AppProvedor>

    <GlobalStyle />
  </Router>
);

export default App;
