import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from '../../Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      variant={ButtonVariants.clear}
      onClick={changeLang}
    >
      {t('lang')} 
    </Button> 
  );
};
