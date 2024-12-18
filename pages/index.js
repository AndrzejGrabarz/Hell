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
    <>
      <Navbar />
      <div className="flex flex-col min-h-full min-w-full">
        <div className="flex justify-center items-center my-8 ">
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('miody')}>
            <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/honey.png" alt="" />
          </div>
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('miody smakowe')}>
            <img className="w-full h-full rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/jelly.png" alt="" />
          </div>
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('miody pitne')}>
            <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/mead1.png" alt="" />
          </div>
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('apiterapia')}>
            <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/cosmetics.png" alt="" />
          </div>
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('ozdoby')}>
            <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/beeswax-candle.png" alt="" />
          </div>
          <div className="w-8 h-8 m-2 md:w-12 md:h-12 md:m-6" onClick={() => setCategory('zestawy prezentowe')}>
            <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/gift-box2.png" alt="" />
          </div>
        </div>
        <main className="flex w-full flex-col items-center " />

        <div className="flex-1 max-w-[1530px] w-full mx-auto">
          <div className=" flex flex-col justify-center align-center md:flex-col lg:flex-row">
            <div className=" min-w-[320px] text-[#000206] text-2xl font-semibold p-10 xl:pr-2 xl:py-10 xl:pl-10">
              <p className="mb-8">Produkty</p>
              <ul className="text-[#000206] text-lg font-normal">

                <li><button onClick={() => setCategory('miody')} href="/cos" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody</button></li>

                <li><button onClick={() => setCategory('miody smakowe')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody smakowe</button></li>

                <li><button onClick={() => setCategory('miody pitne')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Miody pitne</button></li>

                <li><button onClick={() => setCategory('apiterapia')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Apiterapia</button></li>

                <li><button onClick={() => setCategory('ozdoby')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Ozdoby</button></li>

                <li><button onClick={() => setCategory('zestawy prezentowe')} href="/miody" type="button" className="block py-1   text-[#000206] rounded  hover:scale-110" aria-current="page">Zestawy prezentowe</button></li>
              </ul>
            </div>
            <div className=" flex flex-col justify-center align-center max-w-[1250px] md:max-w-[1350px]
             lg:min-w-[680px] xl:min-w-[1120px]  2xl:min-w-[1250px]">
              <div className="ml-10  text-lg font-medium ">
                Strona główna /
                {' '}
                {category}
              </div>

              {category && category === 'miody' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="Miód_Gryczany_2" background="placeholder" product="Gryczany" />
                  <ImageBox foreground="Miód_akacjowy_18" background="placeholder" product="Akacja" />
                  <ImageBox foreground="wrzos" background="placeholder" product="Wrzosowy" />
                  <ImageBox foreground="Miód_p_p" background="placeholder" product="Pyłek i Pierzga" />
                  <ImageBox foreground="Pieżga_7" background="placeholder" product="Pierzga" />
                  <ImageBox foreground="pyłek" background="placeholder" product="Pyłek" />
                </div>
              ) : ''}

              {category && category === 'miody smakowe' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="Miód_z_rokitnikiem_4" background="placeholder" product="Rokitnik" />

                  <ImageBox foreground="Miód_z_truskawką_5" background="placeholder" product="Truskawka" />

                  <ImageBox foreground="Miód_bez_19" background="placeholder" product="Bez" />

                  <ImageBox foreground="Miód_czarna_malina_1" background="placeholder" product="Czarna Malina" />

                  <ImageBox foreground="Miód_z_pigwowcem_3" background="placeholder" product="Pigwa" />

                  <ImageBox foreground="Miód_z_żurawiną_6" background="placeholder" product="Żurawina" />

                  <ImageBox foreground="Imb_pig" background="placeholder" product="Imbir" />

                  <ImageBox foreground="kawa" background="placeholder" product="Kawa" />

                </div>
              ) : ''}

              {category && category === 'miody pitne' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="Wóda" background="placeholder" product="Miód pitny" />
                </div>
              ) : ''}

              {category && category === 'apiterapia' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="maść_13" background="maść-piramida_14" product="Maść z propolisem" />
                  <ImageBox foreground="Krople" background="maść-piramida_14" product="Krople" />
                </div>
              ) : ''}

              {category && category === 'ozdoby' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="Miki_11" background="placeholder" product="Świeczka Mikołaj" />
                  <ImageBox foreground="Jeleń_12" background="placeholder" product="Świeczka Rudolf" />
                  <ImageBox foreground="Miki_z_zimalem_16_11zon" background="placeholder" product="Biegun południowy" />
                  <ImageBox foreground="Miki_z_ziomem_i_choinka_17_11zon" background="placeholder" product="Zestaw świątecznych świeczek" />
                </div>
              ) : ''}

              {category && category === 'zestawy prezentowe' ? (
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start">
                  <ImageBox foreground="prezenty-3_10_11zon" background="placeholder" product="Zestaw prezentowy 1" />
                  <ImageBox foreground="prezenty-2_9_11zon" background="placeholder" product="Zestaw prezentowy 2" />
                </div>
              ) : ''}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col sm:flex-row sm:justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl text-center w-full font-test italic mt-10">Może cie zainteresują</div> */}
        {/* <div className="flex justify-center items-center">
          <IconContext.Provider value={icon1}>
            <IoIosArrowBack onClick={() => showPreviousImage()} />
          </IconContext.Provider>
          {weekSpecjals[imageIndexFirst] && (
          <div className="flex flex-col justify-center items-center specials-meal-card p-10 text-wrap">
            <figure>
              <img
                className="cursor-pointer hover:scale-110"
                src={weekSpecjals[imageIndexFirst].image}
                alt={weekSpecjals[imageIndexFirst].alt}
              />
            </figure>
            <div className="mt-2">{weekSpecjals[imageIndexFirst].name}</div>
          </div>
          )}
          {weekSpecjals[imageIndexMiddle] && (
          <div className="flex flex-col justify-center items-center specials-meal-card p-10 text-wrap">
            <figure>
              <img
                className="cursor-pointer hover:scale-110"
                src={weekSpecjals[imageIndexMiddle].image}
                alt={weekSpecjals[imageIndexMiddle].alt}
              />
            </figure>
            <div className="mt-2">{weekSpecjals[imageIndexMiddle].name}</div>
          </div>
          )}
          {weekSpecjals[imageIndexEnd] && (
          <div className="flex flex-col justify-center items-center specials-meal-card p-10 text-wrap">
            <figure>
              <img
                className="cursor-pointer hover:scale-110"
                src={weekSpecjals[imageIndexEnd].image}
                alt={weekSpecjals[imageIndexEnd].alt}
              />
            </figure>
            <div className="mt-2">{weekSpecjals[imageIndexEnd].name}</div>
          </div>
          )}
          <IconContext.Provider value={icon2}>
            <IoIosArrowForward onClick={() => showNextImage()} />
          </IconContext.Provider>
        </div> */}
        <Footer />
      </div>
    </>
  );
}
