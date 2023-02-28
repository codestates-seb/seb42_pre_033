import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    isAuthenticated,
    login,
    logout,
    accessToken,
    refreshToken,
    checkedLogin,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        accessToken,
        refreshToken,
        checkedLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
