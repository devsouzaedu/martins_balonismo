import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Serviços | Martins Balonismo',
  description: 'Conheça nossos serviços de voos turísticos, voos cativos e marketing promocional com balões.',
};

export default function ServicosPage() {
  const servicos = [
    {
      id: 'turistico',
      titulo: 'Voos Turísticos',
      descricao: (
        <>
          <p className="mb-4">
            Embarque em uma aventura única nos céus com nossos voos turísticos em balões de ar quente. 
            Proporcione a si mesmo, familiares ou amigos uma experiência inesquecível com vistas panorâmicas deslumbrantes.
          </p>
          <p className="mb-4">
            Cada voo dura aproximadamente 1 hora, além do tempo de preparação e deslocamento. 
            A experiência completa leva cerca de 3 a 4 horas, incluindo:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Recepção com café da manhã</li>
            <li>Acompanhamento da montagem e inflagem do balão</li>
            <li>Voo de aproximadamente 1 hora com vista panorâmica</li>
            <li>Brinde com champanhe ao pousar (tradição do balonismo)</li>
            <li>Certificado de voo</li>
            <li>Transporte de retorno ao ponto de partida</li>
          </ul>
        </>
      ),
      imagem: '/images/voo-turistico.jpg'
    },
    {
      id: 'cativo',
      titulo: 'Voos Cativos',
      descricao: (
        <>
          <p className="mb-4">
            Os voos cativos são perfeitos para eventos, inaugurações, feiras e ações promocionais. 
            O balão permanece preso ao solo por cordas, subindo até uma altura determinada (geralmente entre 20 e 30 metros) 
            e oferecendo aos participantes uma experiência controlada e segura.
          </p>
          <p className="mb-4">
            Benefícios dos voos cativos:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Atração diferenciada para qualquer tipo de evento</li>
            <li>Alta visibilidade da marca (o balão pode ser avistado a quilômetros de distância)</li>
            <li>Possibilidade de personalização com a logomarca do cliente</li>
            <li>Experiência controlada e segura para os participantes</li>
            <li>Operação em espaços relativamente pequenos</li>
          </ul>
        </>
      ),
      imagem: '/images/voo-cativo.jpg'
    },
    {
      id: 'marketing',
      titulo: 'Marketing Promocional',
      descricao: (
        <>
          <p className="mb-4">
            Destaque sua marca nos céus! Oferecemos soluções inovadoras de aeromarketing 
            utilizando balões de ar quente como poderosas ferramentas de comunicação e propaganda.
          </p>
          <p className="mb-4">
            Opções disponíveis:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Balões personalizados com formato e cores da sua marca</li>
            <li>Banners e faixas promocionais acoplados ao balão</li>
            <li>Voos cativos em eventos corporativos e feiras</li>
            <li>Ações promocionais com distribuição de brindes</li>
            <li>Cobertura fotográfica e videográfica aérea</li>
            <li>Campanhas publicitárias com balões</li>
          </ul>
        </>
      ),
      imagem: '/images/marketing.jpg'
    },
    {
      id: 'eventos',
      titulo: 'Eventos Especiais',
      descricao: (
        <>
          <p className="mb-4">
            Torne qualquer ocasião especial ainda mais memorável com nossos serviços de balonismo para eventos.
            Seja um casamento, aniversário, pedido de casamento ou qualquer celebração, proporcionamos uma experiência mágica nos céus.
          </p>
          <p className="mb-4">
            Possibilidades para eventos:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Pedidos de casamento durante um voo privativo</li>
            <li>Celebração de aniversários com voos em grupo</li>
            <li>Fotografias aéreas exclusivas para seu evento</li>
            <li>Demonstrações de balonismo em eventos corporativos</li>
            <li>Pacotes personalizados conforme necessidade</li>
          </ul>
        </>
      ),
      imagem: '/images/eventos.jpg'
    }
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/servicos-banner.jpg')"
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-xl text-white max-w-3xl">Conheça as experiências e soluções que oferecemos em balonismo</p>
        </div>
      </div>

      {/* Conteúdo da página */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        {servicos.map((servico, index) => (
          <section 
            key={servico.id} 
            id={servico.id} 
            className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex gap-8 items-center`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-96 relative">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span>Imagem de {servico.titulo}</span>
                </div>
                {/* Nota: As imagens precisam ser adicionadas à pasta public/images */}
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{servico.titulo}</h2>
              <div className="text-gray-600">
                {servico.descricao}
              </div>
              <button className="btn-primary mt-6">
                Solicitar Informações
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
