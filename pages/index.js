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
    setCategory('miody');
  }, []);

  return (
    <div className="flex flex-col min-h-full w-full mx-auto">
      <Navbar />
      <div className="flex justify-center items-center my-8 ">
        <div className="w-12 h-12 m-6" onClick={() => setCategory('miody')}>
          <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/honey.png" alt="" />
        </div>
        <div className="w-12 h-12 m-6" onClick={() => setCategory('miody smakowe')}>
          <img className="w-full h-full rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/jelly.png" alt="" />
        </div>
        <div className="w-12 h-12 m-6" onClick={() => setCategory('miody pitne')}>
          <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/mead2.png" alt="" />
        </div>
        <div className="w-12 h-12 m-6" onClick={() => setCategory('apiterapia')}>
          <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/medicine.png" alt="" />
        </div>
        <div className="w-12 h-12 m-6" onClick={() => setCategory('ozdoby')}>
          <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/candle.png" alt="" />
        </div>
        <div className="w-12 h-12 m-6" onClick={() => setCategory('zestawy prezentowe')}>
          <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/gift-box.png" alt="" />
        </div>
      </div>
      <main className="flex w-full flex-col items-center " />

      <div className="flex-1 max-w-[1530px] w-full mx-auto">
        <div className=" flex justify-center align-center">
          <div className=" min-w-[320px] text-[#000206] text-2xl font-semibold p-10">
            Produkty
            <ul className="text-[#000206] text-xl font-semibold">

              <li><button onClick={() => setCategory('miody')} href="/cos" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody</button></li>

              <li><button onClick={() => setCategory('miody smakowe')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody smakowe</button></li>

              <li><button onClick={() => setCategory('miody pitne')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody pitne</button></li>

              <li><button onClick={() => setCategory('apiterapia')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Apiterapia</button></li>

              <li><button onClick={() => setCategory('ozdoby')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Ozdoby</button></li>

              <li><button onClick={() => setCategory('zestawy prezentowe')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Zestawy prezentowe</button></li>
            </ul>
          </div>
          <div className="min-w-[1250px] flex flex-col justify center align-center">
            <div className="ml-10  text-lg font-medium ">
              Strona główna /
              {' '}
              {category}
            </div>

            {category && category === 'miody' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Gryczany_11_11zon" background="work_in_progress" product="Gryczany" />
                <ImageBox foreground="Miód_akacjowy_18" background="work_in_progress" product="Akacja" />
              </div>
            ) : ''}

            {category && category === 'miody smakowe' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
              </div>
            ) : ''}

            {category && category === 'miody pitne' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
              </div>
            ) : ''}

            {category && category === 'apiterapia' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
              </div>
            ) : ''}

            {category && category === 'ozdoby' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
              </div>
            ) : ''}

            {category && category === 'zestawy prezentowe' ? (
              <div className="flex flex-row flex-wrap">
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
                <ImageBox foreground="Miód_z_rokitnikiem_4" background="work_in_progress" product="Rokitnik" />
              </div>
            ) : ''}
          </div>
        </div>
      </div>
      <div className="flex justify-center">Nasze bestsellery</div>
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
      <Footer />
    </div>
  );
}
