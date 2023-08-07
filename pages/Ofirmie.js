import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Ofirmie() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <div className="flex items-center justify-around font-mono w-full">
        <div className="flex justify-items-end mt-4">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={48}
            priority
          />
        </div>
        <Navbar />
        <div> </div>
      </div>
    </main>
  );
}
