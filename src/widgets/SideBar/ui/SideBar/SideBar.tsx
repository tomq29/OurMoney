import classNames from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const [collabsed, setCollabsed] = useState(false);

  const onToggle = () => {
    setCollabsed((prev) => !prev);
  };

  return (
    <div
    data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collabsed }, [
        className,
      ])}
    >
      <button data-testid="toogle-sidebar" onClick={onToggle}>Toogle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
