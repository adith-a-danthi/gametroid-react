import { useAuth } from '../contexts/auth-context';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequiresAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
