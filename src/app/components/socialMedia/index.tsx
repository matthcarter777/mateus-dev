import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {

  return (
    <div className='px-8 flex flex-row space-x-4'>
      <a 
        className='
          text-2xl
        hover:text-indigo-500 
          transition-colors 
          duration-300
        ' 
        href="https://www.linkedin.com/in/mateus-henrique-silva-ti/" target="_blank"
      >
        <FaLinkedin />
      </a>
      <a 
        className='
          text-2xl
        hover:text-indigo-500 
          transition-colors 
          duration-300
        ' 
        href="https://github.com/matthcarter777/" 
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  )
}