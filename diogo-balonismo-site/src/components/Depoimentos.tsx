import React from 'react';

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      nome: 'Ana Paula',
      cargo: 'Cliente',
      texto: 'Uma experiência incrível! O voo de balão superou todas as minhas expectativas. A equipe da Martins Balonismo é extremamente profissional e atenciosa.',
      avatar: '/images/depoimento1.jpg'
    },
    {
      id: 2,
      nome: 'Marcelo Silva',
      cargo: 'Gerente de Marketing',
      texto: 'Contratamos o serviço de marketing com balão para o lançamento do nosso produto e o resultado foi extraordinário. Visibilidade impressionante!',
      avatar: '/images/depoimento2.jpg'
    },
    {
      id: 3,
      nome: 'Carla Mendes',
      cargo: 'Cliente',
      texto: 'Celebrar meu aniversário com um voo de balão foi a melhor decisão. Momentos mágicos que ficarão para sempre na memória!',
      avatar: '/images/depoimento3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">O Que Nossos Clientes Dizem</h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as histórias e experiências de quem já viveu a emoção de voar conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <div key={depoimento.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full mb-4 overflow-hidden">
                  {depoimento.id === 1 ? (
                    <img 
                      src="/images/martins_foto_perfil.png" 
                      alt="Cliente" 
                      className="w-full h-full object-cover"
                    />
                  ) : depoimento.id === 2 ? (
                    <img 
                      src="/images/diogo_outra_foot.png" 
                      alt="Cliente" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      CM
                    </div>
                  )}
                </div>
                <p className="text-gray-700 italic mb-4">"{depoimento.texto}"</p>
                <h4 className="font-bold text-gray-800">{depoimento.nome}</h4>
                <p className="text-sm text-gray-600">{depoimento.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
