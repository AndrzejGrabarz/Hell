import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';

function Lampa() {
  const router = useRouter();

  const data = router.query.data ? (JSON.parse(router.query.data)) : null;
  console.log(data);
  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <div className="flex flex-col sm:flex-row items-center min-h-screen  w-full mb-8 ">
        <Modal data={data} />
        <div className=" flex flex-col min-h-screen  items-center">
          <button type="submit" onClick={show} className="cursor-pointer">
            <div className="w-[300px] h-[400px]  sm:w-[500px] sm:h-[600px] sm:mx-16">
              {data && data.lampOffSrc ? (
                <Image
                  className="rounded shadow-2xl mt-20 "
                  src={data.lampOffSrc}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }}
                  width={500}
                  height={300}
                  priority
                />
              ) : (
                <p>Brak danych o lampie</p>
              )}
            </div>
          </button>
          <div className="flex flex-row items-center justify-center mt-20">
            {/* <button className="mr-8" id="myButton">&#10094;</button> */}

            {data && data.morePhotos ? (
              data.morePhotos.map((photo, index) => (
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-2" >
                  <Image
                    className="rounded shadow-2xl  hover:scale-125 rounded"
                    src={photo}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }}
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              ))
            ) : (
              <p>Brak dodatkowych zdjęć</p>
            )}
            {/* <button className="ml-8" id="myButton">&#10095;</button> */}
          </div>
        </div>
        <div className=" flex  min-h-screen w-full  sm:mr-16">
          <div className="">
            <div className="flex justify-center mb-16 text-6xl mt-24 font-RedHatItalic font-medium">
              {data.honey_name}
            </div>
            <div>
              <div className="flex justify-center text-3xl sm:text-4xl mb-8 underline-offset-4">Opis</div>
              <div className="text-lg sm:text-2xl break-all border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8">
                {data.description}
              </div>
            </div>
            <div>
              <div className="flex justify-center text-3xl sm:text-4xl  my-8">Wykonanie</div>
              <div className="text-lg sm:text-2xl break-all border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8">
                {data.relization}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lampa;
