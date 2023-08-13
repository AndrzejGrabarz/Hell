import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 w-full">
      <div className="w-full mx-auto py-4 px-12">
        <div className="sm:flex sm:items-center justify-between">
          <div className="flex">
            <a href="#" className="flex">
                <Image id='logo' src="/facebook.png" width={35} height={35} className="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <a href="#" className="flex">
                <Image id='logo' src="/instagram.png" width={35} height={35} className="h-8 mr-3 " alt="Flowbite Logo" />
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/Ofirmie" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/Kontakt" className="mr-4 hover:underline md:mr-6 ">FAQ</Link>
            </li>
            <li>
              <aLink href="/Kontakt" className="hover:underline">Contact</aLink>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          {' '}
          {/* <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a> */}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
