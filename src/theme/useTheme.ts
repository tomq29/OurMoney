import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface useThemeReturn {
  toogleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext);

  function toogleTheme() {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme, toogleTheme };
}
