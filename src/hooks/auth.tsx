import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  user: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<UserData>({} as UserData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(false);

  const signIn = useCallback(() => {
    setUser(true);
  }, []);

  const signOut = useCallback(() => {
    setUser(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): UserData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used with AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
