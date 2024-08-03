import Image from 'next/image';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useMemo, useState } from 'react';
import ImageBox from '@/components/ImageBox';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import weekSpecjals from '@/components/Slider';

export default function Home() {
  const icon1 = useMemo(() => ({ className: 'icon icon-1' }));
  const icon2 = useMemo(() => ({ className: 'icon icon-2' }));
  const [imageIndex, setImageIndex] = useState(0);

  const [imageIndexFirst, setImageIndexFirst] = useState(0);
  const [imageIndexMiddle, setImageIndexMiddle] = useState(1);
  const [imageIndexEnd, setImageIndexEnd] = useState(2);

  function showNextImage() {
    setImageIndexFirst((index) => (index + 1) % weekSpecjals.length);
    setImageIndexMiddle((index) => (index + 1) % weekSpecjals.length);
    setImageIndexEnd((index) => (index + 1) % weekSpecjals.length);
  }

  function showPreviousImage() {
    setImageIndexFirst((index) => (index + 1) % weekSpecjals.length);
    setImageIndexMiddle((index) => (index + 1) % weekSpecjals.length);
    setImageIndexEnd((index) => (index + 1) % weekSpecjals.length);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex w-full flex-col items-center ">
        <div className="flex">
          <IconContext.Provider value={icon1}>
            <IoIosArrowBack onClick={() => showPreviousImage()} />
          </IconContext.Provider>
          {weekSpecjals[imageIndexFirst] && (
            <div className="specials-meal-card p-10">
              <figure>
                <img
                  src={weekSpecjals[imageIndexFirst].image}
                  alt={weekSpecjals[imageIndexFirst].alt}
                />
              </figure>
            </div>
          )}
          {weekSpecjals[imageIndexMiddle] && (
            <div className="specials-meal-card p-10">
              <figure>
                <img
                  src={weekSpecjals[imageIndexMiddle].image}
                  alt={weekSpecjals[imageIndexMiddle].alt}
                />
              </figure>
            </div>
          )}
          {weekSpecjals[imageIndexEnd] && (
            <div className="specials-meal-card p-10">
              <figure>
                <img
                  src={weekSpecjals[imageIndexEnd].image}
                  alt={weekSpecjals[imageIndexEnd].alt}
                />
              </figure>
            </div>
          )}
          <IconContext.Provider value={icon2}>
            <IoIosArrowForward onClick={() => showNextImage()} />
          </IconContext.Provider>
        </div>
      </main>

      <div className='flex justify-center'>
        <div className="bg-white w-[200px]">hej</div>
          <div className="flex justify-center flex-row mt-8 sm:mt-12 flex-wrap">
            <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
            <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
            <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
            <ImageBox lampOn="KluczOff" lampOff="KluczOn" lampa="Klucz" />
            <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
            <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
          </div>
      </div>
      <Footer />
    </div>
  );
}
