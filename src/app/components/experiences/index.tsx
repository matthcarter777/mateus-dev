import { useTranslations } from 'next-intl';
import React from 'react';


const Experience = () => {
  const t = useTranslations('HomePage');

  const experienceItems = [
    {
      company: t('experiences.experience1.company'),
      title: t('experiences.experience1.title'),
      period: t('experiences.experience1.startDateEndDate'),
      description: t('experiences.experience1.description'),
      technologies: [
        t('experiences.experience1.technologies.technologie1'),
        t('experiences.experience1.technologies.technologie2'),
        t('experiences.experience1.technologies.technologie3'),
        t('experiences.experience1.technologies.technologie4'),
        t('experiences.experience1.technologies.technologie5'),
        t('experiences.experience1.technologies.technologie6'),
        t('experiences.experience1.technologies.technologie7'),
        t('experiences.experience1.technologies.technologie8'),
      ],
    },
    {
      company: t('experiences.experience2.company'),
      title: t('experiences.experience2.title'),
      period: t('experiences.experience2.startDateEndDate'),
      description: t('experiences.experience2.description'),
      technologies: [
        t('experiences.experience2.technologies.technologie1'),
        t('experiences.experience2.technologies.technologie2'),
        t('experiences.experience2.technologies.technologie3'),
        t('experiences.experience2.technologies.technologie4'),
        t('experiences.experience2.technologies.technologie5'),
        t('experiences.experience2.technologies.technologie6'),
      ],
    },
    {
      company: t('experiences.experience3.company'),
      title: t('experiences.experience3.title'),
      period: t('experiences.experience3.startDateEndDate'),
      description: t('experiences.experience3.description'),
      technologies: [
        t('experiences.experience3.technologies.technologie1'),
        t('experiences.experience3.technologies.technologie2'),
        t('experiences.experience3.technologies.technologie3'),
        t('experiences.experience3.technologies.technologie4'),
        t('experiences.experience3.technologies.technologie5'),
        t('experiences.experience3.technologies.technologie6'),
      ],
    },

  ];

  return (
    <>
      {experienceItems.map((experience, index) => (
        <div
        key={index}
        id="experience"
        className="
          w-full 
          flex
          flex-col
          md:flex-row 
          hover:bg-gray-800 
          transition-colors 
          duration-300 
          md:p-10 
          rounded-md
        "  
      >
          <div className="w-4/10 flex">
            <p className="w-full mb-2 text-center text-xs text-slate-500">
              {experience.period}
            </p>
          </div>
          <div className="w-full text-center md:w-6/10 md:pl-9">
            <h4 className="mb-4 text-white">{experience.title} - {experience.company}</h4>
            <p className="text-justify mb-3 text-slate-500">
              {experience.description}
            </p>
            <div className="grid grid-cols-2 mb-8 md:grid-cols-4 gap-4">
              {experience.technologies.map((tech, i) => (
                <div key={i} className="bg-indigo-500 rounded-md text-center">
                  <p className='text-xs text-center p-0.5 text-white'>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
