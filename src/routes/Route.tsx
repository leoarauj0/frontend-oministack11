import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

// import { Container } from './styles';

import { useAuth } from '../hooks/Autenticacao';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { usuario } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        // Rota privada / Usuario autenticado
        // true/true = ok
        // true/false = Redirecionar pro login
        // false/true = Redirecionar pro dashboard
        // false/false = ok
        return isPrivate === !!usuario ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              // state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
