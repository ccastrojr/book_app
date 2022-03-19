import { ReactElement } from 'react';
import { Navigate } from 'react-router';

import routes from 'common/constants/routes';
import { LoginTemplate, DashboardTemplate } from 'components/Templates';
import { useAuth } from 'hooks/auth';

interface RouteProps {
  children: ReactElement;
}

export function PrivateRoute({ children }: RouteProps) {
  const { user } = useAuth();

  return user ? (
    <DashboardTemplate>{children}</DashboardTemplate>
  ) : (
    <Navigate to={routes.ROOT} />
  );
}

export function PublicRoute({ children }: RouteProps) {
  const { user } = useAuth();

  return user ? (
    <Navigate to={routes.DASHBOARD} />
  ) : (
    <LoginTemplate>{children}</LoginTemplate>
  );
}
