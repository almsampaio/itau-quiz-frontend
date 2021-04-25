import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Switch>
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/" exact component={ Login } />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
