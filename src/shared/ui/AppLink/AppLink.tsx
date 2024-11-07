import classNames from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkVariants {
  primary = 'primary',
  secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariants;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, variant= AppLinkVariants.primary, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
