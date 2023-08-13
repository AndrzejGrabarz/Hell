import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageBoxGallery from '@/components/ImageBoxGallery';

export default function Galeria() {
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
            height={48}
            priority
          />
        </div>
        <Navbar />
        <div> </div>
      </div>
      <div className="flex justify-center flex-row mt-12 flex-wrap">
        {/* <Modal /> */}
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <Footer />
    </main>
  );
}
