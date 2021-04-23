import { Login } from './pages/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
