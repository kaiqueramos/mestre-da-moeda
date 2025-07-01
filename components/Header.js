import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-6 sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg z-10">
      <div className="container flex items-center justify-between px-6 mx-auto md:px-0">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 mr-3 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
          <span className="text-xl font-bold dark:text-white">
            {name}
          </span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4 md:space-x-6 text-gray-700 dark:text-gray-200">
            <li>
              <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/sobre-nos" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
