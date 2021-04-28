import React from 'react';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { QuizForm } from './pages/QuizForm';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/auth';

import { PrivateRoute } from './routes/PrivateRoute';

import { GlobalStyle } from './styles/global';

function App() : JSX.Element {
  const { auth } = useAuth();

  return (
    <AuthProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
              return (
                auth?.token
                ? <Redirect to="/quiz-form" />
                : <Redirect to="/login" /> 
              )
          }}
        />
        <Route path="/login" exact component={ Login } />
        <Route path="/password-reset" component={ ResetPassword } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <PrivateRoute path="/quiz-form">
          <QuizForm />
        </PrivateRoute>
      </Switch>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
