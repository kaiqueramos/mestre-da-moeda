import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-10 pb-6 text-center">
      {/* Linha Superior: Logo e Nome do Blog */}
      <div className="flex flex-col items-center mb-6">
        <Link href="/" className="flex flex-col items-center no-underline">
          <div className="w-16 h-16 mb-4 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
          <h1 className="text-4xl font-bold dark:text-white">
            {name}
          </h1>
        </Link>
      </div>

      {/* Linha Inferior: Navegação */}
      <nav className="border-t border-b border-gray-200 dark:border-gray-700">
        <ul className="flex justify-center items-center space-x-6 md:space-x-8 py-3 text-gray-600 dark:text-gray-300">
          <li>
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg">
              Início
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/sobre-nos" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
