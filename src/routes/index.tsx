import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from 'contexts/AuthContext';
import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';

export function Routes() {
  const { auth } = useAuth();
  return (
    <Switch>
      {PublicRoutes.map((publicRoute) => publicRoute)}
      {PrivateRoutes.map((privateRoute) => privateRoute)}

      <Route
        exact
        path="/"
        render={() => {
          return auth.token ? (
            <Redirect to="/quiz-form" />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
