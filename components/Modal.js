import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

function Modal({ photo }) {
  const array = ['/KluczOff.jpg', '/KluczOn.jpg', '/LotosOn.jpg', '/LotosOff.jpg'];
  const [imageSrc, setImageSrc] = useState(0);
  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }

  const changeImageSrcToNext = () => {
    if (imageSrc === 3) return;
    setImageSrc((prev) => prev + 1);
  };

  const changeImageSrcToPrev = () => {
    if (imageSrc === 0) return;
    setImageSrc((prev) => prev + -1);
  };

  return (
    <div id="modal" className=" show fixed z-10 h-full w-full left-0 top-0 py-24 bg-black overflow-auto ">
      {/* <span className="close cursor">&times;</span> */}
      <div className=" flex flex-col bg-[#fefefe] m-auto w-[800px]">
        <button onClick={show}>Tutaj</button>
        <div className="">
          <div className="">
            {/* <div className="numbertext">1 / 4</div> */}
            <Image id="myImage" src={array[imageSrc]} width={300} height={300} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        {/* <!-- Next/previous controls --> */}
        <div className="flex justify-between">
          <button id="myButton" onClick={changeImageSrcToPrev}>&#10094;</button>
          <button id="myButton" onClick={changeImageSrcToNext}>&#10095;</button>
        </div>

        {/* <!-- Caption text --> */}
        {/* <div className="flex pb-4">
          <div className="caption-container">
            <p id="caption" />
          </div>

          <div className="px-2">
            <Image className="demo" src="/KluczOff.jpg" width={300} height={300} alt="Nature" />
          </div>

          <div className="px-2">
            <Image className="demo" src="/KluczOn.jpg" width={300} height={300} alt="Snow" />
          </div>

          <div className="px-2">
            <Image className="demo" src="/LotosOff.jpg" width={300} height={300} alt="Mountains" />
          </div>

          <div className="px-2">
            <Image className="demo" src="/LotosOn.jpg" width={300} height={300} alt="Lights" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
