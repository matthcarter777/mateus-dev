import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { FaGithub, FaLinkedin, FaLocationArrow, FaMinus } from "react-icons/fa";
import SocialMedia from '../components/socialMedia';
import Navbar from '../components/navbar';
import Profile from '../components/profile';

export default function Home() {
  const t = useTranslations('HomePage');

  return (  
    <div className="bg-gray-900 w-screen h-screen">
      <div className='grid grid-cols-2'>
        <div className='box-content p-20'>
          <Profile />
          <Navbar />
          <SocialMedia />
        </div>
        <div className='box-content p-20 overflow-y-scroll'>
          <p className="text-justify mb-3 text-slate-500">
            Sou Mateus, formado em Análise e Desenvolvimento de Sistemas, com mais de cinco anos de experiência no desenvolvimento de aplicações completas. Ao longo da minha carreira, trabalhei com tecnologias modernas como Node.js, React, Spring Boot, e tenho uma sólida experiência com bancos de dados, como PostgreSQL. Além disso, tenho forte conhecimento em desenvolvimento de APIs serverless utilizando AWS Lambda e infraestrutura na nuvem.
          </p>
          <p className="text-justify mb-3 text-slate-500">
            Minha trajetória inclui a criação de sistemas adaptados a necessidades empresariais, como o sistema de help desk, que foi amplamente aceito e expandido em minha atual empresa, englobando diversas áreas. Também sou um desenvolvedor full-stack, com experiência na criação de aplicações utilizando React e Node.js, bem como na execução de projetos com monorepos e o framework Next.js.
          </p>
          <p className="text-justify mb-3 text-slate-500">
            Sou conhecido por minhas habilidades de comunicação e colaboração em equipe, que me permitiram trabalhar com sucesso em ambientes ágeis e lidar com diferentes desafios de software. Recentemente, intensifiquei meus estudos em Java, focando em aplicações com Spring Boot para aprimorar ainda mais minhas habilidades de backend.
          </p>
        </div>
      </div>
    </div>
  );
}
