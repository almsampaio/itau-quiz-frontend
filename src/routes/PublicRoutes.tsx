import React from 'react';

import { PublicRoute } from 'routes/PublicRoute';

const ForgotPassword = React.lazy(() => import('pages/ForgotPassword'));
const Login = React.lazy(() => import('pages/Login'));
const ResetPassword = React.lazy(() => import('pages/ResetPassword'));

export const PublicRoutes = [
  <PublicRoute path="/login" key="/login">
    <Login />
  </PublicRoute>,
  <PublicRoute path="/password_reset/:token" key="/password_reset/:token">
    <ResetPassword />
  </PublicRoute>,
  <PublicRoute path="/forgot-password" key="/forgot-password">
    <ForgotPassword />
  </PublicRoute>,
];
