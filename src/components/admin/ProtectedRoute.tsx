import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}