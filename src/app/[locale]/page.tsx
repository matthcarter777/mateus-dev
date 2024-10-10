import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { FaGithub, FaLinkedin, FaLocationArrow, FaMinus } from "react-icons/fa";

export default function Home() {
  const t = useTranslations('HomePage');

  return (  
    <div className="bg-gray-900 w-screen h-screen">
      <div className='grid grid-cols-2'>
        <div className='box-content p-20'>
          <div className='px-8'>
            <h2 className='text-4xl font-bold mb-4'>Mateus Henrique da Silva</h2>
            <h4 className='text-2xl font-medium mb-4'>Desenvolvedor FullStack</h4>
            <p className='text-slate-500'>Construo aplicações do zero com abordagem simples e eficiente para o negocio.</p>
          </div>
          <div className='px-8 flex flex-col size-full'>
            <a className='mt-10 flex flex-row gap-6 items-center' href=""><FaMinus /> Sobre</a>
            <a className='mt-5 flex flex-row gap-6 items-center'href="#"><FaMinus /> Experiencia</a>
            <a className='mt-5 flex flex-row gap-6 items-center'href="#"><FaMinus />Projetos</a>
          </div>
          <div className='px-8 flex flex-row space-x-4'>
            <a className='text-2xl' href=""><FaLinkedin /></a>
            <a className='text-2xl' href="#"><FaGithub /></a>
          </div>
        </div>
        <div>02</div>
      </div>
    </div>
  );
}
