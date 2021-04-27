import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { QuizForm } from './pages/QuizForm';
import { Switch, Route } from 'react-router-dom';
import { StoreProvider, useStore } from './hooks/store';

import { GlobalStyle } from './styles/global';

function App() {
  const [store] = useStore();

  if (!store) {
    return <Login />;
  }

  return (
    <StoreProvider>
      <Switch>
        <Route path="/login" exact component={ Login } />
        <Route path="/password-reset" component={ ResetPassword } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/quiz-form" exact component={ QuizForm } />
      </Switch>
      <GlobalStyle />
    </StoreProvider>
  );
}

export default App;
