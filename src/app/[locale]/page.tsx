import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');

  return (  
    <div className="bg-gray-900">
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
