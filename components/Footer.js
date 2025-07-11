import Link from 'next/link';

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="text-white fill-current"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="text-gray-400 stroke-current dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex justify-center p-1 mt-6 bg-white dark:bg-gray-900 rounded-3xl">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center justify-center w-24 h-10 p-2 pr-2 transition cursor-pointer dark:bg-primary rounded-3xl align-center"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center justify-center w-24 h-10 p-2 pr-2 transition cursor-pointer bg-primary dark:bg-transparent rounded-3xl align-center"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col items-center py-16">
      <nav className="mb-4">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li>
            <Link href="/sobre-nos">
              <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Sobre Nós</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Contato</a>
            </Link>
          </li>
          <li>
            <Link href="/politica-de-privacidade">
              <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Política de Privacidade</a>
            </Link>
          </li>
          <li>
            <Link href="/termos-de-uso">
              <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Termos de Uso</a>
            </Link>
          </li>
          <li>
            <Link href="/declaracao-de-afiliados">
              <a className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Declaração de Afiliados</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mb-3 font-bold uppercase dark:text-white opacity-60">
        {copyrightText}
      </p>
      <ThemeSwitcher />
    </footer>
  );
}