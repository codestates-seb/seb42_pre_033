import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

function Protected() {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return <Outlet />;
}
export default Protected;
