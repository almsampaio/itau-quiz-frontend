import React from 'react';
import { ReactNode } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface PrivateRouteProps  {
  children: ReactNode;
  path: string;
}

export function PrivateRoute({ children, path }: PrivateRouteProps) : JSX.Element {
  const { auth } = useAuth();

  return (
    <Route
      path={path}
      render={({ location }: RouteComponentProps ) => {
        return (
          auth.token
          ? (
            children
          )
          : (
            <Redirect
              to={{
                  pathname: "/login",
                  state: { from: location }
              }}
            />
          ))}
      }
    />
  );
}
          