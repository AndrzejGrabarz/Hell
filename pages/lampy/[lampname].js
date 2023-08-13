import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';


function Lampa() {
  const router = useRouter();
  const { lampname } = router.query;
  const data = router.query.data ? (JSON.parse(router.query.data)) : null;

  const [image, setImage] = useState(0);

  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Modal data = {data}/>
      <div className="flex items-center justify-around font-mono w-full">
        <div className="flex justify-items-end mt-4">
          <Image
            id="logo"
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={200}
            priority
          />
        </div>
        <Navbar />
        <div> </div>
      </div>

      <div className="flex items-center min-h-screen  font-mono w-full ">
        <div className=" flex flex-col min-h-screen w-[1000px] p-8 items-center">
          <button onClick={show} className="cursor-pointer">
            <Image
              id="logo"
              src={`/${data.lampOffSrc}.jpg`}
              width={400}
              height={550}
              style={{ height: 'auto' }}
              className="mt-20"
              priority
            />
          </button>
        </div>
        <div className=" flex flex-col min-h-screen w-full pr-12 py-8 justify-center">
          <div className="flex justify-center mb-16 text-6xl mt-24">
            {data.name}
          </div>
          <div>
            <div className="flex justify-center text-4xl mb-8 underline-offset-4">Opis</div>
            <div className="text-2xl break-all border-t-4 border-black pt-8 ">{data.description}</div>
          </div>
          <div>
            <div className="flex justify-center text-4xl my-8">Wykonanie</div>
            <div className="text-2xl break-all border-t-4 border-black pt-8">{data.description}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lampa;
