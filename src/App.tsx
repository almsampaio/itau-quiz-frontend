import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { QuizForm } from './pages/QuizForm';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';

import { PrivateRoute } from './routes/PrivateRoute';

import { GlobalStyle } from './styles/global';

function App() {

  return (
    <AuthProvider>
      <Switch>
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
