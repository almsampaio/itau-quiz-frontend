import { useAuth } from 'contexts/AuthContext';
import { Routes } from 'routes';

import { Loading } from 'components/Loading';

function App() {
  const { auth } = useAuth();
  console.log(auth);

  return <>{auth.rehydrated ? <Routes /> : <Loading color="white" />}</>;
}

export default App;
