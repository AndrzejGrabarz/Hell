/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';

function ImageBox({ lampOn, lampOff }) {
  // const imageRef = useRef(null);
  const [isLampOn, setIsLampOn] = useState(false);

  return (
    <div
      className="flex px-12 py-8"
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <Image
        className="rounded"
        src={`/${isLampOn ? lampOff : lampOn}.jpg`}
        alt=""
        width={300}
        height={300}
      />
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
