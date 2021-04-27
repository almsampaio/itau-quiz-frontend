import { ReactNode, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface PrivateRouteProps {
  children: ReactNode;
  path: string;
}

export function PrivateRoute({ children, path }: PrivateRouteProps) {
  console.log(useAuth());
  const {auth} = useAuth();
  console.log('PrivateRoute');

  return (
    auth.rehydrated
    ? (
      <Route
        path={path}
        render={({ location }) => {
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
          