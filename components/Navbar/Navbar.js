import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row items-center  font-barlow italic w-full mb-12 text-[#000206]">
      <ul className="flex flex-col sm:flex-row sm:justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center w-full font-test">
        <li>
          <Link href="/" className="block py-2 px-8  rounded  hover:scale-110" aria-current="page">Stron Główna</Link>
        </li>
        <li>
          <Link href="/Ofirmie" className="block py-2 px-8  rounded hover:scale-110 ">Pasieka</Link>
        </li>
        <li>
          <Link href="/Galeria" className="block py-2 px-8  rounded hover:scale-110 ">Jak to wygląd</Link>
        </li>
        <li>
          <Link href="/Kontakt" className="block py-2 px-8  rounded hover:scale-110 ">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
