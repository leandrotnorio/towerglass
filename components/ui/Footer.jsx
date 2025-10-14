import Image from 'next/image';
import Link from 'next/link';

const logoagt = '/agtvidroslogo.svg';

export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 text-white pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity duration-200">
            <Image
              src={logoagt}
              alt="Logo Tower Glass"
              width={140}
              height={35}
              className="mx-auto sm:mx-0"
            />
          </Link>
          <address className="not-italic text-center sm:text-right text-sm">
            <p>Contato: <a href="mailto:contato@engenhariavidros.com" className="underline hover:text-blue-300">contato@engenhariavidros.com</a></p>
            <p>&copy; {new Date().getFullYear()} AGT Vidros. Todos os direitos reservados.</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
