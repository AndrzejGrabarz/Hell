import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Galeria() {
  
  
  function show () {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <div className="flex items-center justify-around font-mono w-full">
        <div className="flex justify-items-end mt-4">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={48}
            priority
          />
        </div>
        <Navbar />
        <button onClick={show}> Tutaj</button>
      </div>

      <div id="modal" className=" show flex z-10 h-full w-full left-0 top-0 py-24 bg-black overflow-auto ">
        {/* <span className="close cursor">&times;</span> */}
        <div className=" flex flex-col bg-[#fefefe] m-auto w-full max-w-screen-xl">

          <div className="flex">
            <div className="px-2">
              <div className="numbertext">1 / 4</div>
              <img src="KluczOff.jpg" />
            </div>

            <div className="px-2">
              <div className="numbertext">2 / 4</div>
              <img src="KluczOff.jpg" />
            </div>

            <div className="px-2">
              <div className="numbertext">3 / 4</div>
              <img src="KluczOff.jpg" />
            </div>

            <div className="px-2">
              <div className="numbertext">4 / 4</div>
              <img src="KluczOff.jpg" />
            </div>
          </div>
          {/* <!-- Next/previous controls --> */}
          <div className="flex justify-between">
          <a className="flex">&#10094;</a>
          <a className="next">&#10095;</a>
          </div>

          {/* <!-- Caption text --> */}
          <div className="flex pb-4">
            <div className="caption-container">
              <p id="caption" />
            </div>

            {/* <!-- Thumbnail image controls --> */}
            <div className="px-2">
              <img className="demo" src="KluczOff.jpg" alt="Nature" />
            </div>

            <div className="px-2">
              <img className="demo" src="KluczOff.jpg" alt="Snow" />
            </div>

            <div className="px-2">
              <img className="demo" src="KluczOff.jpg" alt="Mountains" />
            </div>

            <div className="px-2">
              <img className="demo" src="KluczOff.jpg" alt="Lights" />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
