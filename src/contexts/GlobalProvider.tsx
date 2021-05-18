import { ReactNode } from 'react';

import { AuthProvider } from 'hooks/auth';

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
