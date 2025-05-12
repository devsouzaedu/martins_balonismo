import React from 'react';

export const metadata = {
  title: 'Galeria | Martins Balonismo',
  description: 'Veja imagens dos nossos voos de balu00e3o, eventos e au00e7u00f5es promocionais.',
};

export default function GaleriaPage() {
  const categorias = [
    { id: 'voos', nome: 'Voos Turu00edsticos' },
    { id: 'eventos', nome: 'Eventos' },
    { id: 'promocional', nome: 'Marketing Promocional' },
    { id: 'cativo', nome: 'Voos Cativos' },
  ];

  const imagens = [
    { id: 1, categoria: 'voos', titulo: 'Nascer do sol em voo', descricao: 'Voo turu00edstico ao amanhecer', src: '/images/galeria-voo-1.jpg' },
    { id: 2, categoria: 'voos', titulo: 'Voo sobre montanhas', descricao: 'Paisagem espetacular', src: '/images/galeria-voo-2.jpg' },
    { id: 3, categoria: 'voos', titulo: 'Balu00e3o colorido', descricao: 'Nossa frota de balu00f5es', src: '/images/galeria-voo-3.jpg' },
    { id: 4, categoria: 'eventos', titulo: 'Evento corporativo', descricao: 'Lanu00e7amento de produto', src: '/images/galeria-evento-1.jpg' },
    { id: 5, categoria: 'eventos', titulo: 'Casamento especial', descricao: 'Celebrau00e7u00e3o memorável', src: '/images/galeria-evento-2.jpg' },
    { id: 6, categoria: 'eventos', titulo: 'Festival de balu00f5es', descricao: 'Espetu00e1culo de cores no cu00e9u', src: '/images/galeria-evento-3.jpg' },
    { id: 7, categoria: 'promocional', titulo: 'Campanha publicitu00e1ria', descricao: 'Marca em destaque', src: '/images/galeria-promo-1.jpg' },
    { id: 8, categoria: 'promocional', titulo: 'Au00e7u00e3o de marketing', descricao: 'Ativau00e7u00e3o de marca', src: '/images/galeria-promo-2.jpg' },
    { id: 9, categoria: 'cativo', titulo: 'Voo cativo em feira', descricao: 'Grande visibilidade', src: '/images/galeria-cativo-1.jpg' },
    { id: 10, categoria: 'cativo', titulo: 'Balu00e3o amarrado', descricao: 'Evento empresarial', src: '/images/galeria-cativo-2.jpg' },
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/galeria-banner.jpg')"
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossa Galeria</h1>
          <p className="text-xl text-white max-w-3xl">Imagens que capturam a magia e a beleza dos nossos voos e eventos</p>
        </div>
      </div>

      {/* Filtros de categoria */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium">
            Todos
          </button>
          {categorias.map((categoria) => (
            <button 
              key={categoria.id}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Grade de imagens */}
      <div className="container mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagens.map((imagem) => (
            <div key={imagem.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span>{imagem.titulo}</span>
                </div>
                {/* Nota: As imagens precisam ser adicionadas u00e0 pasta public/images */}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{imagem.titulo}</h3>
                <p className="text-gray-600 text-sm">{imagem.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
