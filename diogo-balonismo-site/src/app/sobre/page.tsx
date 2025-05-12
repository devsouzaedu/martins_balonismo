import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Sobre Nós | Martins Balonismo',
  description: 'Conheça a história da Martins Balonismo, nossa missão e valores que nos guiam no mundo do balonismo.',
};

export default function SobrePage() {
  const valores = [
    {
      titulo: 'Segurança',
      descricao: 'A segurança dos nossos passageiros é nossa prioridade absoluta. Seguimos rigorosos protocolos e regulamentações.',
      icone: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      titulo: 'Experiência',
      descricao: 'Mais de 15 anos de experiência nos proporcionam o conhecimento necessário para oferecer voos memoráveis.',
      icone: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      titulo: 'Paixão',
      descricao: 'Somos apaixonados pelo balonismo e compartilhamos essa paixão com nossos passageiros em cada voo.',
      icone: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      titulo: 'Inovação',
      descricao: 'Buscamos constantemente novas formas de aprimorar nossos serviços e oferecer experiências únicas.',
      icone: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const equipe = [
    {
      nome: 'Diogo Martins',
      cargo: 'Fundador e Piloto Profissional',
      bio: 'Natural de São Carlos (SP), aos 22 anos, Diogo Martins transforma sua paixão pelo balonismo em experiências únicas. Já participou de diversos festivais pelo Brasil, como Torres (RS), Rio Claro (SP), Boituva (SP), entre outros.',
      foto: '/images/martins_foto_perfil.png'
    },
    {
      nome: 'Camila Santos',
      cargo: 'Diretora de Operações',
      bio: 'Especialista em logística e gerenciamento de equipes, Camila garante que todas as operações ocorram com máxima segurança e eficiência.',
      foto: '/images/camila.jpg'
    },
    {
      nome: 'Roberto Mendes',
      cargo: 'Piloto Sênior',
      bio: 'Piloto certificado com vasta experiência internacional, Roberto é responsável pelo treinamento da equipe de pilotos.',
      foto: '/images/roberto.jpg'
    }
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/sobre-banner.jpg')"
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nós</h1>
          <p className="text-xl text-white max-w-3xl">Conheça nossa história e o que nos move</p>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span>Imagem da história da empresa</span>
                </div>
                {/* Nota: As imagens precisam ser adicionadas à pasta public/images */}
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Diogo Martins, de 22 anos, é natural de São Carlos (SP) e vive uma paixão que começou cedo: o balonismo. 
                Hoje, ele é piloto profissional e o nome por trás da Martins Balonismo, empresa que une adrenalina, 
                emoção e estratégia para transformar voos em experiências únicas — seja para o público, seja para marcas.
              </p>
              <p className="text-gray-600 mb-4">
                Com uma trajetória marcada por dedicação e excelência, Diogo já participou de diversos festivais de balonismo 
                por todo o Brasil, levando sua técnica e carisma para os céus de cidades como Torres (RS), Rio Claro (SP), 
                Boituva (SP), entre outras. Seu currículo inclui parcerias com grandes nomes do setor, como a Caco Balloons 
                e o também piloto Digo, com quem compartilha experiências, conhecimento e muitos voos memoráveis.
              </p>
              <p className="text-gray-600">
                Hoje, além dos voos turísticos que encantam casais, famílias e aventureiros, Diogo oferece ações de marketing 
                aéreo com balões de ar quente — uma maneira poderosa e inesquecível de promover marcas, lançamentos ou eventos. 
                Com a expertise da Martins Balonismo, sua marca pode literalmente alcançar novos patamares e ficar gravada na memória do público.
                Com Diogo, voar vai muito além do céu: é sobre criar histórias que ficam para sempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Missão, Visão e Valores</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Missão</h3>
              <p className="text-gray-600">
                Proporcionar experiências inesquecíveis em voos de balão com máxima segurança, 
                excelência no atendimento e respeito ao meio ambiente.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em serviços de balonismo, reconhecida pela segurança, 
                inovação e capacidade de transformar voos em momentos mágicos para nossos clientes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  {valor.icone}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200 relative">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span>Foto de {membro.nome}</span>
                  </div>
                  {/* Nota: As imagens precisam ser adicionadas à pasta public/images */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{membro.nome}</h3>
                  <p className="text-blue-600 mb-3">{membro.cargo}</p>
                  <p className="text-gray-600">{membro.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
