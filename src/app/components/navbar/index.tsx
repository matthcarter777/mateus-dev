import { FaMinus } from "react-icons/fa";

export default function Navbar() {

  return (
    <div className='px-8 flex flex-col size-full'>
      <a className='mt-10 flex flex-row gap-6 items-center'><FaMinus /> Sobre</a>
      <a className='mt-5 flex flex-row gap-6 items-center'><FaMinus /> Experiencia</a>
      <a className='mt-5 flex flex-row gap-6 items-center'href="#"><FaMinus />Projetos</a>
    </div>
  )
}