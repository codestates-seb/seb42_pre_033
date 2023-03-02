import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { login, logout, accessToken, refreshToken } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        accessToken,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
