import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';



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
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
