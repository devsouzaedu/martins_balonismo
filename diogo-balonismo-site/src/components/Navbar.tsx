import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/martiins_balonismo_logo.png"
            alt="Martins Balonismo Logo"
            width={180}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary">
            Início
          </Link>
          <Link href="/servicos" className="text-gray-800 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary">
            Serviços
          </Link>
          <Link href="/galeria" className="text-gray-800 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary">
            Galeria
          </Link>
          <Link href="/sobre" className="text-gray-800 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary">
            Sobre
          </Link>
          <Link href="/contato" className="text-gray-800 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary">
            Contato
          </Link>
        </div>
        
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
