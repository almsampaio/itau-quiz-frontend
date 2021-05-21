import { useAuth } from 'contexts/AuthContext';
import { Routes } from 'routes';

import Loading from 'components/common/Loading';

function App() {
  const { auth } = useAuth();

  return <>{auth.rehydrated ? <Routes /> : <Loading color="white" />}</>;
}

export default App;
