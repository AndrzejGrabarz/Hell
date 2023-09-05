import { useState } from 'react';
import Image from 'next/image';

function Modal({ data }) {
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
    <div id="modal" className=" show fixed z-10 h-full w-full left-0 top-0 py-24 bg-black overflow-auto ">
      {/* <span className="close cursor">&times;</span> */}
      <div className="flex w-full justify-end mb-8">
        <button className="text-white text-5xl mr-20" onClick={show}>&times;</button>
      </div>

      <div className="flex mx-20">
        <button id="myButton" className="text-white text-5xl" onClick={changeImageSrcToPrev}>&#10094;</button>
        <div className=" flex flex-col bg-[#fefefe] m-auto ">
          <div className="">
            <div className="flex w-full justify-center">
              <Image id="myImage" src={data.morePhotos[imageSrc]} width={300} height={300} style={{ width: '800px', height: '800px' }} />
            </div>
          </div>
          {/* <!-- Next/previous controls --> */}
        </div>
        <button id="myButton" className="text-white text-5xl" onClick={changeImageSrcToNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default Modal;
