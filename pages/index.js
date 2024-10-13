import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useMemo, useState } from 'react';
import ImageBox from '@/components/ImageBox';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import weekSpecjals from '@/components/Slider';

export default function Home() {
  const icon1 = useMemo(() => ({ className: 'icon icon-1' }));
  const icon2 = useMemo(() => ({ className: 'icon icon-2' }));
  const [imageIndex, setImageIndex] = useState(0);
  const [category, setCategory] = useState(0);

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

  useEffect(() => {
    setCategory('Strona główna / miody');
  }, []);

  return (
    <div className="flex flex-col w-full mx-auto">
      <Navbar />
      <div className="flex justify-center items-center">
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
      <main className="flex w-full flex-col items-center " />

      <div className="max-w-[1530px] w-full mx-auto">
        <div className=" flex justify-center align-center">
          <div className=" max-w-[280px]text-white text-2xl font-semibold p-10">
            Produkty
            <ul className="text-white text-xl font-semibold">
              <li><button onClick={() => setCategory('Strona główna / miody')} href="/miody" type="button" className="block py-1   text-white rounded  hover:scale-110" aria-current="page">Miody</button></li>
              <li><button onClick={() => setCategory('Strona główna / miody pitne')} href="/miody" type="button" className="block py-1   text-white rounded  hover:scale-110" aria-current="page">Pitne</button></li>
              <li><button onClick={() => setCategory('Strona główna / akcesoria')} href="/miody" type="button" className="block py-1   text-white rounded  hover:scale-110" aria-current="page">Akcesoria</button></li>
            </ul>
          </div>
          <div className="max-w-[1340px]flex flex-col justify center align-center">
            <div className="ml-10">{category}</div>

            {category === 'Strona główna / miody' && category ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
              </div>
            ) : ''}

            {category === 'Strona główna / miody pitne' && category ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
              </div>
            ) : ''}

            {category === 'Strona główna / akcesoria' && category ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox lampOn="PasekOff" lampOff="PasekOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Pasek" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Lotos" />
                <ImageBox lampOn="LotosOff" lampOff="LotosOn" lampa="Klucz" />
              </div>
            ) : ''}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
