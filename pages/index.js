import Image from 'next/image';
import ImageBox from '@/components/ImageBox';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className="flex w-full mt-8 ">
        <Image
          src="/Wstęp.jpg"
          alt="Wstęp"
          width={3396}
          height={1235}
          layout="responsive"
        />
      </div>
      <div className="flex text-4xl mt-8 font-RedHatItalic  italic">Lampy</div>
      <div className="flex justify-center flex-row mt-12 flex-wrap">
        <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
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
