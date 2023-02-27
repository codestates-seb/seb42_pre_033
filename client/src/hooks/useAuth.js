import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('access_token'),
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refresh_token'),
  );

  const navigate = useNavigate();

  const login = (newAccessToken, newRefreshToken, redirectUrl = '/') => {
    localStorage.setItem('access_token', newAccessToken);
    localStorage.setItem('refresh_token', newRefreshToken);
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    setIsAuthenticated(true);
    navigate(redirectUrl);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return { isAuthenticated, login, logout, accessToken, refreshToken };
};
