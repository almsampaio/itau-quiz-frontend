import { Login } from './pages/Login';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
