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
    <div className="flex  w-full flex-col items-center">
      <Navbar />
      <div className="flex flex-row max-w-[1630px]   w-full  ">
        <Modal data={data} />
        <div className=" flex flex-row items-center mb-10">

          <div className="flex flex-col items-center justify-center mt-20">
            {/* <button className="mr-8" id="myButton">&#10094;</button> */}

            {data && data.morePhotos ? (
              data.morePhotos.map((photo, index) => (
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-2">
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
          <button type="submit" onClick={show} className="cursor-pointer">
            <div className="w-[300px] h-[400px]  sm:w-[500px] sm:h-[600px] sm:mx-16">
              {data && data.mainModalPhoto ? (
                <Image
                  className="rounded shadow-2xl mt-20 "
                  src={data.mainModalPhoto}
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
        </div>
        <div className=" flex flex-col h-dvh w-full  sm:mr-16">

          <div className="flex justify-center mb-16 text-5xl mt-24 font-RedHatItalic font-medium">
            {data ? data.honey_name : 'Ładowanie...'}
          </div>
          <div>
            <div className="text-lg sm:text-2xl  border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8" />
            <ul className="text-2xl font-normal mb-12 mt-10 font-RedHatItalic font-light italic">
              <li className="mb-4">*Naturalna słodycz prosto z pasieki</li>
              <li className="mb-4">*Bogactwo witamin i antyoksydantów w każdej łyżeczce</li>
              <li className="mb-4">*Idealny wybór dla zdrowia i smaku</li>
              <li className="mb-4">*Wspiera odporność i dodaje energii każdego dnia</li>
              <li className="mb-4">*Niepowtarzalny aromat i doskonała konsystencja</li>

            </ul>
            <div className="text-center my-4 font-RedHatItalic font-light italic text-2xl">Miody dostepne w dwóch rozmiarach</div>
            <div className='flex flex-row justify-center font-RedHatItalic font-light italic'>
              <div className='flex flex-col items-center mx-10 text-lg'>
                <div className='bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium'>
                  <div className='text-center'>1100g</div>
                  <div>100,00 zł</div>
                </div>
                <div className="w-20 h-20 my-4">
                  <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/big jar.png" alt="" />
                </div>
                
              </div>
              
              <div className='flex flex-col items-center  mx-10 font-RedHatItalic font-light italic text-lg'>
                <div className='bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium'>
                  <div className='text-center'>450g</div>
                  <div className=''>50,00 zł</div>
                </div>
                <div className="w-12 h-12  mt-auto mb-4">
                  <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/small jar.png" alt="" />
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=" flex flex-col max-w-[1450px] bg-slate-350 mt-10">
        <div className="">
          <div className="mb-20">
            <div className="flex justify-center text-3xl sm:text-4xl mb-8 underline-offset-4">Opis</div>
            <div className="text-lg sm:text-2xl  border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8">
              {data ? data.description : 'Ładowanie...'}
            </div>
          </div>
          <div className="mb-20">
            <div className="flex justify-center text-3xl sm:text-4xl  my-8">Wykonanie</div>
            <div className="text-lg sm:text-2xl  border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8">
              {data ? data.realization : 'Ładowanie...'}
            </div>
          </div>
          <div>
            <div className="flex justify-center text-3xl sm:text-4xl  my-8">Właściwości</div>
            <div className="text-lg sm:text-2xl  border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8">
              {data && data.properties ? (
                data.properties.map((photo, index) => {
                  console.log('Tutaj', photo);
                  return (
                    <ul>
                      <li className="list-disc my-4 mx-8">{photo}</li>
                    </ul>
                  );
                })
              ) : 'Ładowanie'}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lampa;
