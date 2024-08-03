/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import WybierzLampe from '@/utils/Lampy';

function ImageBox({ lampOn, lampOff, lampa }) {
  const [isLampOn, setIsLampOn] = useState(false);

  const selectedLamp = WybierzLampe.find((e) => e.name === lampa);
  return (
    <div
      className="flex sm:py-8 cursor-pointer  sm:my-4 "
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <Link href={{
        pathname: `/lampy/${lampa}`,
        query: { data: (JSON.stringify(selectedLamp)) },
      }}
      >
        <div className="w-[200px] h-[300px]  sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[550px] lg:h-[650px] xl:w-[250px] xl:h-[250px]">
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
          <div className='w-full bg-white'>Miód spadziowy</div>
          <div className='w-full bg-white'>200 zł</div>
        </div>
      </Link>
    </div>
  );
}

export default ImageBox;
