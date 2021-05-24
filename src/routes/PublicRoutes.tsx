import { Route } from 'react-router-dom';

import ForgotPassword from 'pages/ForgotPassword';
import Login from 'pages/Login';
import ResetPassword from 'pages/ResetPassword';

export const PublicRoutes = [
  <Route path="/login" exact component={Login} key="/login" />,
  <Route
    path="/password_reset/:token"
    component={ResetPassword}
    key="/password_reset/:token"
  />,
  <Route
    path="/forgot-password"
    component={ForgotPassword}
    key="/forgot-password"
  />,
];
