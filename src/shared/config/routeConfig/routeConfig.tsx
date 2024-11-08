import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}
export const routePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: routePath[AppRouter.MAIN],
    element: <MainPage />,
  },
  {
    path: routePath[AppRouter.ABOUT],
    element: <AboutPage />,
  },
  {
    path: routePath[AppRouter.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
