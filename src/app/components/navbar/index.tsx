import { useTranslations } from "next-intl";
import { FaMinus } from "react-icons/fa";

export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <div className='px-8 flex-col size-full hidden md:block'>
      <a  
        href="#about" 
        className='
          mt-10 
          flex 
          flex-row 
          gap-6 
          items-center 
          hover:text-indigo-500 
          transition-colors 
          duration-300
          text-white
        '
        >
        <FaMinus />
        {t('about')}
      </a>
      <a 
        href="#experience" 
        className='
          mt-5 
          flex 
          flex-row 
          gap-6 
          items-center
        hover:text-indigo-500 
          transition-colors 
          duration-300
          text-white
        '
      >
        <FaMinus /> 
        {t('experiences')}
      </a>
      <a  
        href="#formations" 
        className='
        mt-5 
        flex 
        flex-row 
        gap-6 
        items-center
      hover:text-indigo-500 
        transition-colors 
        duration-300
        text-white
      '
      >
        <FaMinus />
        {t('formations')}
      </a>
      <a  
        href="#projects" 
        className='
        mt-5 
        flex 
        flex-row 
        gap-6 
        items-center
      hover:text-indigo-500 
        transition-colors 
        duration-300
        text-white
      '
      >
        <FaMinus />
        {t('projects')}
      </a>
    </div>
  )
}