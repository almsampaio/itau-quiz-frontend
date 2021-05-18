import { ReactNode } from 'react';

import { AuthProvider } from 'contexts/AuthContext';

import { GlobalStyle } from 'styles/global';

interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      {children}
    </AuthProvider>
  );
}
