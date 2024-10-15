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
      ],
    },

  ];

  return (
    <>
      {experienceItems.map((experience, index) => (
        <div
          key={index}
          id="experience"
          className="w-full flex hover:bg-gray-800 transition-colors duration-300 p-10 rounded-md"
        >
          <div className="w-4/10 flex">
            <p className="w-full text-center text-xs text-slate-500">
              {experience.period}
            </p>
          </div>
          <div className="w-6/10 pl-9">
            <h4 className="mb-4">{experience.title} - {experience.company}</h4>
            <p className="text-justify mb-3 text-slate-500">
              {experience.description}
            </p>
            <div className="grid grid-cols-4 gap-4">
              {experience.technologies.map((tech, i) => (
                <div key={i} className="bg-indigo-500 rounded-md text-center">
                  <p className='text-xs text-center p-0.5'>{tech}</p>
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
