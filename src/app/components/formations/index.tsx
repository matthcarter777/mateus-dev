import { useTranslations } from 'next-intl';
import React from 'react';


const Formations = () => {
  const t = useTranslations('HomePage');

  const formationsItems = [
    {
      institution: t('formations.formation1.institution'),
      degree: t('formations.formation1.degree'),
      startDateEndDate: t('formations.formation1.startDateEndDate'),
    },
    {
      institution: t('formations.formation2.institution'),
      degree: t('formations.formation2.degree'),
      startDateEndDate: t('formations.formation2.startDateEndDate'),
    },
    {
      institution: t('formations.formation3.institution'),
      degree: t('formations.formation3.degree'),
      startDateEndDate: t('formations.formation3.startDateEndDate'),
    },

  ];


  return (
    <>
      <div
        id="experience"
        className="w-full flex flex-col"
      >
        <h4 className='text-2xl font-medium mb-4 text-white mt-6'>{t('formation')}</h4>

        <>
          {formationsItems.map((formation, index) => (
            <div key={index} className='hover:bg-gray-800 transition-colors duration-300 p-10 rounded-md'>
              <h4 className='font-bold text-white'>{formation.degree}</h4>
              <p className='text-slate-500'>
                {`${formation.institution} | ${formation.startDateEndDate}`}
              </p>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Formations;
