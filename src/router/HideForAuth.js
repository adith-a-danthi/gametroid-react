import { useAuth } from '../contexts/auth-context';
import { Navigate, Outlet } from 'react-router-dom';

export const HideForAuth = () => {
  const { authState } = useAuth();

  return authState.isAuthenticated ? <Navigate to="/products" replace /> : <Outlet />;
};
