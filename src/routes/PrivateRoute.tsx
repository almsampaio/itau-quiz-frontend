import React from 'react';
import { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface PrivateRouteProps {
  children: ReactNode;
  path: string;
}
interface RenderProps {
  location: string;
}

export function PrivateRoute({ children, path }: PrivateRouteProps) : JSX.Element {
  const { auth } = useAuth();

  return (
    auth.rehydrated
    ? (
      <Route
        path={path}
        render={({ location }: RenderProps ) => {
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
    )
    : <h1>Loading</h1>
    );
}
          