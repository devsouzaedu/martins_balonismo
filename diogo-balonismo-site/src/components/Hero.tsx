import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo do balão */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/images/balonismo_voo_turistisco_imagem2.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-black/50 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center mb-8">
          <img src="/images/martiins_balonismo_logo.png" alt="Martins Balonismo Logo" className="h-24 md:h-32 mb-6 drop-shadow-lg" />
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2 drop-shadow-lg text-center">
            Experimente o Mundo de Uma Nova Perspectiva
          </h2>
          <div className="w-24 h-1 bg-primary-light mb-6"></div>
        </div>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
          Voos panorâmicos, eventos promocionais e experiências inesquecíveis em balões de ar quente
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/servicos" 
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Nossos Serviços
          </Link>
          <Link 
            href="/contato" 
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Agende seu Voo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
