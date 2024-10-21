import { useTranslations } from 'next-intl';
import React from 'react';


const Formations = () => {
  const t = useTranslations('HomePage');


  return (
    <>
      <div
        id="experience"
        className="w-full flex flex-col"
      >
        <h4 className='text-2xl font-medium mb-4 text-white mt-6'>Formação Academica</h4>
        
        <div className='hover:bg-gray-800 transition-colors duration-300 p-10 rounded-md'>
          <h4 className='font-bold text-white'>MBA Engenhraria de Software</h4>
          <p className='text-slate-500'>Faculdade Metropolitana | 2019 - 2022</p>
        </div>

      </div>
    </>
  );
};

export default Formations;
