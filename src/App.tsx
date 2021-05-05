import React from 'react';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { QuizForm } from './pages/QuizForm';
import { QuizDownload } from './pages/QuizDownload';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/auth';
import { PrivateRoute } from './routes/PrivateRoute';
import { Loading } from './components/Loading';

import { GlobalStyle } from './styles/global';

function App() : JSX.Element {
  const { auth } = useAuth();

  return (
    <>
      {auth.rehydrated
      ? (
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                  return (
                    auth.token
                    ? <Redirect to="/quiz-form" />
                    : <Redirect to="/login" /> 
                  )
              }}
            />
            <Route path="/login" exact component={ Login } />
            <Route path="/password_reset/:token" component={ ResetPassword } />
            <Route path="/forgot-password" component={ ForgotPassword } />
            <PrivateRoute path="/quiz-form">
              <QuizForm />
            </PrivateRoute>
            <PrivateRoute path="/quiz-download/:id">
              <QuizDownload />
            </PrivateRoute>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
      )
      : <Loading color="white" />}
      <GlobalStyle />
    </>
  );
}

export default App;
