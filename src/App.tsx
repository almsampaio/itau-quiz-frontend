import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { PasswordReset } from './pages/PasswordReset';
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
        <Route path="/password-reset" component={ PasswordReset } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/login" exact component={ Login } />
      </Switch>
      <GlobalStyle />
    </StoreProvider>
  );
}

export default App;
