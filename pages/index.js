import Image from 'next/image';
import ImageBox from '@/components/ImageBox';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className="flex w-full ">
        <Image
          src="/Wstęp.jpg"
          alt="Wstęp"
          width={3396}
          height={1235}
          layout="responsive"
        />
      </div>
      <div className="flex self-start text-3xl  m-12 sm:text-6xl  md:text-6xl  lg:text-7xl sm:mx-16 sm:my-32 font-RedHatItalic  italic ">Lampy</div>
      <div className="flex justify-center flex-row mt-8 sm:mt-12 flex-wrap">
        <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <div className="flex self-start text-3xl m-12 sm:text-7xl md:text-6xl sm:mx-16 sm:my-32 font-RedHatItalic  italic">Wazony</div>
      <div className="flex justify-center flex-row mt-12 flex-wrap">
        <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <div className="flex self-start text-3xl m-12 sm:text-7xl md:text-6xl sm:mx-16 sm:my-32 font-RedHatItalic  italic">Patery</div>
      <div className="flex justify-center flex-row mt-12 flex-wrap mb-4">
        <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <Footer />
    </main>
  );
}
