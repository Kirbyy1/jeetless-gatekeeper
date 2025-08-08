import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const verified = typeof window !== 'undefined' && localStorage.getItem('jeetless_verified') === 'true';
  if (!verified) return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
