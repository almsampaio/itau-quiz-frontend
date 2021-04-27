import { ReactNode, createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext<AuthContextType>({} as AuthContextType );

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

export function useAuth() {
  const {auth, updateAuth} = useContext(AuthContext);
  return {auth, updateAuth};
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState({
    token: '',
    rehydrated: false,
  });

  function rehydrate() {
    const data = localStorage.getItem('auth');
    data && setAuth(prevState => ({
      ...prevState,
      token: JSON.parse(data),
      rehydrated: true,
      }));
  };
  
  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth.token));
  }, [auth]);

  function updateAuth(token: string) {
    setAuth(prevState => ({
      ...prevState,
      token,
      rehydrated: true,
      }));
  } 

  return (
    <AuthContext.Provider value={{auth, updateAuth}}>
      { children }
    </AuthContext.Provider>
  );
}
