import Image from 'next/image';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center  font-mono w-full">
      <div className="m-16">
        <Image
          id="logo"
          src="/logo.png"
          alt="Vercel Logo"
          className="sm:mx-auto"
          width={200}
          height={200}
          priority
        />
      </div>
      <ul className="flex flex-col sm:flex-row sm:justify-center text-xl sm:text-4xl text-center w-full font-test">
            <li>
              <Link href="/" className="block py-2 px-8  text-gray-900 rounded  hover:scale-110  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">Stron Główna</Link>
            </li>
            <li>
              <Link href="/Ofirmie" className="block py-2 px-8  text-gray-900 rounded hover:scale-110  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">O firmie</Link>
            </li>
            <li>
              <Link href="/Galeria" className="block py-2 px-8  text-gray-900 rounded hover:scale-110  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Galeria</Link>
            </li>
            <li>
              <Link href="/Kontakt" className="block py-2 px-8  text-gray-900 rounded hover:scale-110  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Kontakt</Link>
            </li>
          </ul>
    </div>
  );
}

export default Navbar;
