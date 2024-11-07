import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('aboutPage');

  return <div>{t('About Page')}</div>;
}

export default AboutPage;
