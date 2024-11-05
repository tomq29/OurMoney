import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export default function App() {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>ToogleTheme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
}
