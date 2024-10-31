import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);


  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

// почему это не работает??
// function ThemeProvider({ children }): FC {
//   const [theme, setTheme] = useState<Theme>(defaultTheme);

//   function toogleTheme() {
//     setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
//   }

//   const defaultProps = useMemo(
//     () => ({ theme: theme, setTheme: setTheme }),
//     [theme]
//   );

//   return (
//     <ThemeContext.Provider value={defaultProps}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export default ThemeProvider;
