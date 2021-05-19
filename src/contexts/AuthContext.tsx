import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getQuizTypes } from 'api/quiz';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthData {
  token: string;
  rehydrated: boolean;
}

interface AuthContextType {
  auth: AuthData;
  updateAuth: (token: string) => void;
}

export function useAuth(): AuthContextType {
  const { auth, updateAuth } = useContext(AuthContext);
  return { auth, updateAuth };
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [auth, setAuth] = useState({
    token: '',
    rehydrated: false,
  });

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
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
