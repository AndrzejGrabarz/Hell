import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ImageBox from '@/components/ImageBox';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <div className="flex items-center justify-around font-mono w-full">
        <div className="flex justify-items-end mt-4">
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
        <Navbar />
        <div> </div>
      </div>

      <div className="flex w-full mt-8 ">
        <Image
          src="/Wstęp.jpg"
          alt="Wstęp"
          width={3396}
          height={1235}
          layout="responsive"
        />
      </div>
      <div className="flex text-3xl mt-8 font-mono">Lampy</div>
      <div className="flex justify-center flex-row mt-12 flex-wrap">
        <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Lotos" />
        <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
        <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <Footer />
    </main>
  );
}

/*
   {/* {Array(6).fill().map((item, index) => (
          <ImageBox key={index} photo="Lampa R2" />
        ))}
        {Array(6).fill().map((item, index) => (
          <ImageBox key={index} photo="Lampa R3" />
        ))} */
