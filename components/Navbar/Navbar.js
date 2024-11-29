import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const burgerMenuRef = useRef();
  const menuRef = useRef();
  const [swap, swapSet] = useState('/Domino/Icons/menu.png');

  const toggleMenu = () => {
    if (burgerMenuRef.current && menuRef.current) {
      const isMenuOpen = menuRef.current.classList.contains('translate-y-0');
      if (isMenuOpen) {
        menuRef.current.classList.remove('translate-y-0');
        menuRef.current.classList.add('-translate-y-full');
        swapSet('/Domino/Icons/menu.png')
      } else {
        menuRef.current.classList.remove('-translate-y-full');
        menuRef.current.classList.add('translate-y-0');
        swapSet('/Domino/Icons/close.png')
      }
    }
  };

  return (
    <nav className="flex justify-end md:justify-center md:items-center m w-[92%] mx-auto font-barlow italic w-full md:mt-12 text-[#000206]">
      {/* Menu */}
      <div
        ref={menuRef}
        className="duration-500 md:static absolute md:min-h-fit min-h-[30vh] right-0 top-0 md:top-0 md:w-auto w-full flex items-center px-5 transform -translate-y-full md:mt-8"

      >
        <ul className="flex md:flex-row flex-col md:items-center gap-4 md:gap-2 md:text-3xl xl:text-3xl ">
          <li>
            <Link href="/" className="block py-2 px-8  rounded  hover:scale-110" aria-current="page">Stron Główna</Link>
          </li>
          <li>
            <Link href="/Ofirmie" className="block py-2 px-8  rounded hover:scale-110 ">Pasieka</Link>
          </li>
          {/* <li>
            <Link href="/Galeria" className="block py-2 px-8  rounded hover:scale-110 ">Jak powstają nasze produkty</Link>
          </li> */}
          <li>
            <Link href="/Kontakt" className="block py-2 px-8  rounded hover:scale-110 ">Kontakt</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <div className="flex items-center gap-6 m-8 z-50">
        <button onClick={toggleMenu} type="button">
          <img
            ref={burgerMenuRef}
            className="w-12 h-12 rounded-lg object-cover hover:scale-125 cursor-pointer md:hidden"
            src={swap}
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
