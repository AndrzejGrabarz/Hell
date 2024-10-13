/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Miody from '@/utils/Miody';

function ImageBox({ lampOn, lampOff, lampa }) {
  const [isLampOn, setIsLampOn] = useState(false);

  const selectedLamp = Miody.find((e) => e.name === lampa);

  const [isPressed, setIsPressed] = useState(true);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div
      className="flex flex-col sm:py-8 cursor-pointer  sm:my-4 m-10"
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <Link href={{
        pathname: `/lampy/${lampa}`,
        query: { data: (JSON.stringify(selectedLamp)) },
      }}
      >
        <div className="w-[200px] h-[300px]  sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[550px] lg:h-[650px] xl:w-[300px] xl:h-[300px]">
          <Image
            className="rounded shadow-2xl"
            src={`/${isLampOn ? lampOff : lampOn}.jpg`}
            alt={selectedLamp.name}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
            width={500}
            height={300}
            priority
          />
        </div>
      </Link>
      <div className="flex flex-col  w-full bg-white rounded-b-lg justify-center items-center font-medium p-10 ">
        <p className='text-xl mb-2'>{selectedLamp.honey_name}</p>
        <div className="flex flex-row">
          <button onClick={handleClick} aria-pressed={!isPressed} type="button" className=" mr-4 py-1 px-2">450g</button>
          <button onClick={handleClick} aria-pressed={isPressed} type="button" className=" ml-4 py-1 px-2">1000g</button>
        </div>
        <p className='text-lg pt-4'>{isPressed ? '100,00 zł' : '50,00 zł' }</p>
      </div>
    </div>
  );
}

export default ImageBox;
