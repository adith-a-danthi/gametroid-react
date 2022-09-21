import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HideForAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.authState);

  return isAuthenticated ? <Navigate to="/products" replace /> : <Outlet />;
};
