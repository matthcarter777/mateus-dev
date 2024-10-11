import { useTranslations } from "next-intl";

export default function Profile() {

  const t = useTranslations('HomePage');
  
  return (
    <div className='px-8'>
      <h2 className='text-4xl font-bold mb-4'>{t('name')}</h2>
      <h4 className='text-2xl font-medium mb-4'>{t('title')}</h4>
      <p className='text-slate-500'>{t('description')}</p>
    </div>
  )
}