import Image from 'next/image';
import NavbarMenu from './NavbarMenu';

function Navbar() {
  return (
    <div className="grid grid-cols-5 items-center  font-mono w-full mt-4">
      <div className="col-span-1 place-self-center">
        <Image
          id="logo"
          src="/logo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="col-span-4  place-self-center">
        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
