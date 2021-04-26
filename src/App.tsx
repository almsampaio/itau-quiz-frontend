import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
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
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/" exact component={ Login } />
      </Switch>
      <GlobalStyle />
    </StoreProvider>
  );
}

export default App;
