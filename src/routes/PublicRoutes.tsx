import { Redirect, Route } from 'react-router-dom';

import { useAuth } from 'contexts/AuthContext';
import ForgotPassword from 'pages/ForgotPassword';
import Login from 'pages/Login';
import ResetPassword from 'pages/ResetPassword';

export function PublicRoutes() {
  const { auth } = useAuth();
  return (
    <>
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
      <Route path="/login" exact component={Login} />
      <Route path="/password_reset/:token" component={ResetPassword} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </>
  );
}
