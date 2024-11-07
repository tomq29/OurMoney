import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink  to={'/'} variant={AppLinkVariants.secondary} className={cls.mainLink}>
          Home
        </AppLink>
        <AppLink to={'/about'} variant={AppLinkVariants.secondary} >About</AppLink>
      </div>
    </div>
  );
};
