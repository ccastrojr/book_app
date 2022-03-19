import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom';

import routesNames from 'common/constants/routes';
import * as Pages from 'pages';

import { PrivateRoute, PublicRoute } from './Routes';

interface Routes {
  path: string;
  isPrivate: boolean;
  element: JSX.Element;
}

const routes: Routes[] = [
  { path: routesNames.ROOT, isPrivate: false, element: <Pages.SignIn /> },
  { path: routesNames.FORGOT, isPrivate: false, element: <Pages.Forgot /> },
  {
    path: routesNames.DASHBOARD,
    isPrivate: true,
    element: <Pages.Dashboard />,
  },
];

export function Routes() {
  return (
    <ReactRouterDomRoutes>
      {routes.map(({ path, isPrivate, element }) =>
        isPrivate ? (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute>{element}</PrivateRoute>}
          />
        ) : (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ),
      )}
    </ReactRouterDomRoutes>
  );
}
