import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { getQuizTypes } from 'api/quiz';

interface AuthData {
  token: string;
  rehydrated: boolean;
}

interface AuthContextType {
  auth: AuthData;
  updateAuth: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth(): AuthContextType {
  const { auth, updateAuth, logout } = useContext(AuthContext);
  return { auth, updateAuth, logout };
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const history = useHistory();
  const [auth, setAuth] = useState({
    token: '',
    rehydrated: false,
  });

  function logout() {
    updateAuth('');
    history.push('/');
  }

  async function rehydrate() {
    const tokenJSON = localStorage.getItem('auth');
    if (tokenJSON) {
      const token = JSON.parse(tokenJSON);
      try {
        await getQuizTypes();
        setAuth((prevState) => ({
          ...prevState,
          token,
          rehydrated: true,
        }));
      } catch (error) {
        setAuth((prevState) => ({
          ...prevState,
          rehydrated: true,
        }));
        console.log(error.message);
      }
    } else {
      setAuth((prevState) => ({
        ...prevState,
        rehydrated: true,
      }));
    }
  }

  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth.token));
  }, [auth]);

  function updateAuth(token: string) {
    setAuth((prevState) => ({
      ...prevState,
      token,
      rehydrated: true,
    }));
  }

  return (
    <AuthContext.Provider value={{ auth, updateAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
