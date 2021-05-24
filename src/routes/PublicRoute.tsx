import { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from 'contexts/AuthContext';

interface PublicRouteProps {
  children: ReactNode;
  path: string;
}

export function PublicRoute({ children, path }: PublicRouteProps): JSX.Element {
  const { auth } = useAuth();

  return (
    <Route
      path={path}
      render={() => {
        return auth.token ? (
          <Redirect
            to={{
              pathname: '/quiz-form',
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
}
