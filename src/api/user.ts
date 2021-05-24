import request from 'api/config';

interface loginProps {
  email: string;
  password: string;
}

export const login = async (user: loginProps) =>
  request.unauthorized().post('/authenticate', user);

export const requestPasswordReset = async (email: string) =>
  request.unauthorized().post('/forgot_password', email);

export const resetPassword = async (newPassword: string) =>
  request.authorized().post('/reset_password', newPassword);
