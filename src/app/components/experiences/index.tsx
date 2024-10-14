

export default function Experience() {

  return (
    <div id="experience" className="w-full flex hover:bg-gray-800 transition-colors duration-300 p-10 rounded-md">
      <div className="w-4/10 flex">
        <p className="w-full text-center text-sm text-slate-500">2024 - PRESENT</p>
      </div>
      <div className="w-6/10 pl-9">
        <h4 className="mb-4">Analista de TI Pleno - ITAFOS</h4>
        <p className="text-justify mb-3 text-slate-500">
          Participação ativa no desenvolvimento do Projeto Parceiros Itafos, utilizando Java Spring Boot, buscando criar uma solução de autenticação segura
          e validação de status de funcionários por chave ID; 
          Implementação de um banco de dados MySQL, integrando dados de usuários e parceiros para otimizar a colaboração e o fluxo de informações entre
        </p>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-indigo-500 rounded-md text-center">
            <p>Java</p>
          </div>
          <div className="bg-indigo-500 rounded-md text-center">
            <p>Java</p>
          </div>
          <div className="bg-indigo-500 rounded-md text-center">
            <p>Java</p>
          </div>
          <div className="bg-indigo-500 rounded-md text-center">
            <p>Java</p>
          </div>
          <div className="bg-indigo-500 rounded-md text-center">
            <p>Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}