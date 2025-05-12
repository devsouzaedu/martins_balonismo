import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NossoTrabalho = () => {
  const servicos = [
    {
      id: 1,
      titulo: 'Voos Turísticos',
      descricao: 'Experimente a sensação única de flutuar pelos céus em nossos balões de ar quente com vistas panorâmicas incríveis.',
      imagem: '/images/voo-turistico.jpg',
      link: '/servicos#turistico'
    },
    {
      id: 2,
      titulo: 'Voos Cativos',
      descricao: 'Perfeito para eventos e publicidade, nossos voos amarrados proporcionam uma experiência controlada e segura.',
      imagem: '/images/voo-cativo.jpg',
      link: '/servicos#cativo'
    },
    {
      id: 3,
      titulo: 'Marketing Promocional',
      descricao: 'Destaque sua marca com nossos serviços de aeromarketing e soluções promocionais personalizadas com balões.',
      imagem: '/images/marketing.jpg',
      link: '/servicos#marketing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Conheça Nosso Trabalho</h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Martins Balonismo oferece experiências exclusivas em balonismo para turismo e soluções inovadoras de marketing aéreo para sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div key={servico.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg border border-gray-100">
              <div className="relative h-60 w-full">
                {servico.id === 1 ? (
                  <img 
                    src="/images/balonismo_voo_turistisco_imagem.jpg" 
                    alt={servico.titulo} 
                    className="w-full h-full object-cover"
                  />
                ) : servico.id === 2 ? (
                  <img 
                    src="/images/balonismo_voo_turistisco_imagem3.jpeg" 
                    alt={servico.titulo} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src="/images/martins_logo_somente_balao.png" 
                    alt={servico.titulo} 
                    className="w-full h-full object-contain bg-blue-50 p-4"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{servico.titulo}</h3>
                <p className="text-gray-600 mb-4">{servico.descricao}</p>
                <Link 
                  href={servico.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Saiba mais <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/servicos"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NossoTrabalho;
