import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from '@azure/msal-react';
import { ProtectedLayout } from "@/app/container/ProtectedLayout";
import { LOGIN } from "@/modules/auth/routes";

export interface ProtectedRouteProps {
  children: React.ComponentType;
}

export const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} replace />;
  }

  return (
    <>
      <ProtectedLayout>{children}</ProtectedLayout>
    </>
  );
};
