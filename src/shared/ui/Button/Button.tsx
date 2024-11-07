import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonVariants {
  clear = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, variant, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
