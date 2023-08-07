import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex  items-center justify-between  p-4">
        <div className="w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-row font-medium p-4 mt-4  rounded-lg  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-8 text-2xl  text-gray-900 rounded  hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">Stron Główna</Link>
            </li>
            <li>
              <Link href="/Ofirmie" className="block py-2 px-8 text-2xl  text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">O firmie</Link>
            </li>
            <li>
              <Link href="/Galeria" className="block py-2 px-8 text-2xl  text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Galeria</Link>
            </li>
            <li>
              <Link href="/Kontakt" className="block py-2 px-8 text-2xl  text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
