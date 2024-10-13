import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import ImageBoxGallery from '@/components/ImageBoxGallery';

export default function Galeria() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className="text-4xl  sm:text-5xl font-RedHatItalic font-normal italic mt-12">Kawałek z naszego życia</div>
      <div className="flex justify-center flex-row mt-12 flex-wrap mb-12">
        {/* <Modal /> */}
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
        <ImageBoxGallery lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
        <ImageBoxGallery lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
        <ImageBoxGallery lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
      </div>
      <Footer />
    </main>
  );
}
