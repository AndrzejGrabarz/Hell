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
      className="flex px-12 sm:py-8 cursor-pointer mx-8 sm:my-4 my-8 "
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <Link href={{
        pathname: `/lampy/${lampa}`,
        query: { data: (JSON.stringify(selectedLamp)) },
      }}
      >
        <div className="w-[200px] h-[300px]  sm:w-[300px] sm:h-[400px]">
          <Image
            className="rounded shadow-2xl"
            src={`/${isLampOn ? lampOff : lampOn}.jpg`}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
            width={500}
            height={300}
            priority
          />
        </div>
      </Link>

      {/* <Image
        onMouseOver={() => {
          imageRef.current.src = `/${lampOff}.jpg`;
        }}
        onMouseOut={() => {
          imageRef.current.src = `/${lampOn}.jpg`;
        }}
        src={`/${lampOn}.jpg`}
        alt=" "
        width={300}
        height={300}
        ref={imageRef}
      /> */}
    </div>
  );
}

export default ImageBox;
