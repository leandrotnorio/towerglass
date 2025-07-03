import Image from 'next/image';
import Link from 'next/link'

const logoagt = '/agtvidroslogo.svg'
 

export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 mt-0 pt-2 pb-2">
      <div className="max-w-7xl mx-auto px-2 py-0 text-center">
        <Link  href="/">
          <Image    
            src={logoagt}
            alt="Logo"
            width={120}
            height={30}
            className="mx-auto block"/>
        </Link>
        <p className="mt-1 text-white">Contato: contato@engenhariavidros.com</p>
        <p className="text-white">&copy; {new Date().getFullYear()} Tower Glass. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
