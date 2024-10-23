import { useTranslations } from "next-intl";

export default function Profile() {

  const t = useTranslations('HomePage');
  
  return (
    <div className='px-8'>
      <h2 className='text-2xl md:text-4xl font-bold mb-4 text-white :'>{t('name')}</h2>
      <h4 className='text-xl md:text-2xl font-medium mb-4 text-white'>{t('title')}</h4>
      <p className='text-slate-500'>{t('description')}</p>
    </div>
  )
}