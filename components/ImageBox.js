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
      className="flex px-12 py-8 cursor-pointer mx-8 my-4"
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <Link href={{
        pathname: `/lampy/${lampa}`,
        query: { data: (JSON.stringify(selectedLamp)) },
      }}
      >
        <Image
          className="rounded shadow-2xl"
          src={`/${isLampOn ? lampOff : lampOn}.jpg`}
          alt=""
          width={300}
          height={400}
        />
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
