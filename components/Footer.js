import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow w-full">
      <div className="w-full mx-auto py-4 px-8">
        <div className="sm:flex sm:items-center justify-between">
          <div className="flex">
            <Link href="https://www.facebook.com/bieliblask" className="flex">
              <Image id="logo" src="/facebook.png" width={35} height={35} className="h-6 w-6 sm:h-8 sm:w-8 mr-3 mb-2" alt="Flowbite Logo" />
            </Link>
            <a href="#" className="flex">
              <Image id="logo" src="/instagram.png" width={35} height={35} className="h-6 w-6 sm:h-8 sm:w-8 mr-3 " alt="Flowbite Logo" />
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0">
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
              <Link href="/Kontakt" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="sm:my-4 my-2 border-gray-200 " />
        <span className="block text-sm text-gray-500 sm:text-center">
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
