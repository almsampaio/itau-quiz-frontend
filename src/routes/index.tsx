import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from 'contexts/AuthContext';
import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';

import Loading from 'components/common/Loading';

export function Routes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.rehydrated ? (
        <React.Suspense fallback={<Loading color="white" />}>
          <Switch>
            {PublicRoutes.map((publicRoute) => publicRoute)}
            {PrivateRoutes.map((privateRoute) => privateRoute)}

            <Route>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </React.Suspense>
      ) : (
        <Loading color="white" />
      )}
    </>
  );
}
