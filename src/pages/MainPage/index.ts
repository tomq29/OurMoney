import { lazy } from 'react';

// export const MainPage = lazy(() => import('./ui/MainPage'));

export const MainPage = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./ui/MainPage')), 1500);
    })
);
