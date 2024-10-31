import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useContext, useState } from 'react';
import { useTheme } from './theme/useTheme';
import classNames from './helpers/classNames/classNames';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const Counter = lazy(() => import('./components/Counter'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

export default function App() {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>ToogleTheme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/counter'}>Counter</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
