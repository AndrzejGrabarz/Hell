import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-[#f8f8f8] rounded-lg shadow w-full my-8">
      <div className="w-full mx-auto py-4 px-8">
        <div className="sm:flex sm:items-center justify-between">
          <div className="flex">
            <Link href="https://www.facebook.com/profile.php?id=100016290109115" className="flex">
              <Image id="logo" src="/facebook.png" width={35} height={35} className="h-6 w-6 sm:h-8 sm:w-8 mr-3 mb-2" alt="facebook" />
            </Link>
            <Link href="https://www.google.com/search?q=Dominik+Pasieka&sca_esv=64a609d90a359d40&hl=pl&authuser=0&sxsrf=ADLYWILHDtpQOheOw3mMI3Eb1jo3BcKkSw%3A1733688159683&ei=X_tVZ5-2KbDYwPAPh-KRiAY&ved=0ahUKEwjf4aLX-5iKAxUwLBAIHQdxBGEQ4dUDCA8&uact=5&oq=Dominik+Pasieka&gs_lp=Egxnd3Mtd2l6LXNlcnAiD0RvbWluaWsgUGFzaWVrYTIHEAAYsAMYHjILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIESLkFUGRYZHABeACQAQCYAUWgAUWqAQExuAEDyAEA-AEBmAICoAJJwgIJEAAYsAMYDRgemAMA4gMFEgExIECIBgGQBgaSBwEyoAelAw&sclient=gws-wiz-serp#vhid=/g/11y9m8fmj6&vssid=lcl" className="flex">
              <Image id="logo" src="/instagram.png" width={35} height={35} className="h-6 w-6 sm:h-8 sm:w-8 mr-3 " alt="instagram" />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium  sm:mb-0">
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
        <span className="block text-sm sm:text-center">
          © 2024
          {' '}
          {/* <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a> */}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
