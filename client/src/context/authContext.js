import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, login, logout, accessToken, refreshToken } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, accessToken, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
