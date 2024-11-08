import classNames from 'shared/lib/classNames/classNames';
import cls from './ErrorBoundaryPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

interface ErrorBoundaryPageProps {
  className?: string;
}
export const ErrorBoundaryPage = ({ className }: ErrorBoundaryPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.ErrorBoundaryPage, {}, [className])}>
      {t('Something went wrong')}

      <Button onClick={reloadPage}>{t('Reload')}</Button>
    </div>
  );
};
