import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import SunIcon from 'shared/assets/icons/light-mode.svg';
import MoonIcon from 'shared/assets/icons/dark-mode.svg';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariants.clear}
      onClick={toogleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
