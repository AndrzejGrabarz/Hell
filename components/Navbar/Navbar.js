import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row items-center  font-mono w-full mb-12">
      <div className="m-12 sm:m-24 w-[250px] h-[250px]  sm:w-[300px] sm:h-[350px] md:w-[360px] md:h-[410px] lg:w-[380px] lg:h-[430px] xl:w-[400px] xl:h-[450px] 4xl:w-[550px] 4xl:h-[550px]">
        <Image
          id="logo"
          src="/logo.png"
          alt="Vercel Logo"
          className="sm:mx-auto"
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
          width={350}
          height={350}
          priority
        />
      </div>
      <ul className="flex flex-col sm:flex-row sm:justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center w-full font-test">
        <li>
          <Link href="/" className="block py-2 px-8  text-gray-900 rounded  hover:scale-110" aria-current="page">Stron Główna</Link>
        </li>
        <li>
          <Link href="/Ofirmie" className="block py-2 px-8  text-gray-900 rounded hover:scale-110 ">O firmie</Link>
        </li>
        <li>
          <Link href="/Galeria" className="block py-2 px-8  text-gray-900 rounded hover:scale-110 ">Galeria</Link>
        </li>
        <li>
          <Link href="/Kontakt" className="block py-2 px-8  text-gray-900 rounded hover:scale-110 ">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
