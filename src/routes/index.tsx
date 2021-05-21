import { Redirect, Route, Switch } from 'react-router-dom';

import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';

export function Routes() {
  return (
    <Switch>
      <PublicRoutes />
      <PrivateRoutes />

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
