/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import WybierzLampe from '@/utils/Lampy';

function ImageBoxGallery({ lampOn, lampOff, lampa }) {
  const [isLampOn, setIsLampOn] = useState(false);
  const selectedLamp = WybierzLampe.find((e) => e.name === lampa);

  const [imageSrc, setImageSrc] = useState(0);
  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }

  const changeImageSrcToNext = () => {
    if (imageSrc === 1) return;
    setImageSrc((prev) => prev + 1);
  };

  const changeImageSrcToPrev = () => {
    if (imageSrc === 0) return;
    setImageSrc((prev) => prev - 1);
  };

  return (
    <div
      className="flex px-12 py-8 cursor-pointer mx-8 my-4"
      onMouseOver={() => setIsLampOn(true)}
      onMouseOut={() => setIsLampOn(false)}
    >
      <button type="submit" onClick={show}>
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
      </button>

      <div id="modal" className=" show fixed z-10 h-full w-full left-0 top-0 py-24 bg-black overflow-auto ">
        {/* <span className="close cursor">&times;</span> */}
        <div className="flex w-full justify-end mb-8">
          <button className="text-white text-5xl mr-20" onClick={show}>&times;</button>
        </div>

        <div className="flex mx-20">
          <button id="myButton" className="text-white text-5xl" onClick={changeImageSrcToPrev}>&#10094;</button>
          <div className=" flex flex-col  m-auto ">
            <div className="">
              <div className="flex w-full justify-center">
                <Image className="rounded" id="myImage" src={selectedLamp.morePhotos[imageSrc]} width={300} height={300} style={{ width: '800px', height: '800px' }} />
              </div>
            </div>
            {/* <!-- Next/previous controls --> */}
          </div>
          <button id="myButton" className="text-white text-5xl" onClick={changeImageSrcToNext}>&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default ImageBoxGallery;
