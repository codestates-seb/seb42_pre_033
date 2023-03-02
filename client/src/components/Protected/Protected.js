import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

function Protected() {
  const { accessToken } = useAuthContext();
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return <Outlet />;
}
export default Protected;
