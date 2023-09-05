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
        <button className="text-white text-2xl mr-8 sm:text-5xl sm:mr-20" onClick={show}>&times;</button>
      </div>

      <div className="flex mx-20 items-center justify-center">
        <button id="myButton" className="text-white text-2xl sm:text-5xl" onClick={changeImageSrcToPrev}>&#10094;</button>
        <div className=" flex flex-col items-center justify-center ">
          <div className="">
            <div className="w-[300px] h-[300px]  sm:w-[700px] sm:h-[700px] mx-2 sm:mx-20">
                <Image
                  className="rounded "
                  src={data.morePhotos[imageSrc]}
                  style={{ width: '100%', height: '100%' }}
                  width={150}
                  height={150}
                  priority
                />
              </div>
            </div>
         
          {/* <!-- Next/previous controls --> */}
        </div>
        <button id="myButton" className="text-white text-2xl sm:text-5xl" onClick={changeImageSrcToNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default Modal;
