import { ReactNode, createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext([{}, () => {}]);

interface StoreProviderProps {
  children: ReactNode;
}

export function useStore() {
  const [store, setStore] = useContext(StoreContext);
  return [store, setStore];
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [store, setStore] = useState({});

  function rehydrate() {
    const data = localStorage.getItem('store');
    data && setStore(JSON.parse(data));
  };
  
  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(store));
  }, [store]);

  return (
    <StoreContext.Provider value={[store, setStore]}>
      { children }
    </StoreContext.Provider>
  );
}
