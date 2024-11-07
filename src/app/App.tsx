import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import 'app/styles/index.scss';
import { Suspense } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';






export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
