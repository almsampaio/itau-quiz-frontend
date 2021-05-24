import ForgotPassword from 'pages/ForgotPassword';
import Login from 'pages/Login';
import ResetPassword from 'pages/ResetPassword';
import { PublicRoute } from 'routes/PublicRoute';

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
