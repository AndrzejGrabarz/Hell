import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';
import Miody from '@/utils/Miody';

function Produkt() {
  const router = useRouter();
  const { products } = router.query;
  console.log(products);
  if (!products) {
    return <p>Ładowanie...</p>;
  }

  const data = Miody.find((e) => e.name === products);

  if (!data) {
    return <p>Produkt nie znaleziony.</p>;
  }

  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
  }
  return (
    <div className="flex  w-full flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col max-w-[1630px] lg:flex-row  w-full  ">
        <Modal data={data} />
        <div className=" flex flex-col items-center mb-10 order-2 lg:order-1 lg:justify-center xl:justify-start">

          <div className="flex flex-rowitems-center justify-center mt-20 order-2 md:order-2">
            {/* <button className="mr-8" id="myButton">&#10094;</button> */}

            {data && data.morePhotos ? (
              data.morePhotos.map((photo, index) => (
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-2">
                  <Image
                    className="rounded shadow-2xl  hover:scale-125 rounded"
                    src={photo}
                    alt={data.name}
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
          <button type="submit" onClick={show} className="cursor-pointer order-1 md:order-1">
            <div className="w-[300px] h-[400px]  sm:w-[500px] sm:h-[600px] sm:mx-16">
              {data && data.mainModalPhoto ? (
                <Image
                  className="rounded shadow-2xl mt-20 "
                  src={data.mainModalPhoto}
                  alt={data.name}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }}
                  width={500}
                  height={300}
                  priority
                />
              ) : (
                <p>Brak danych o produkcie</p>
              )}
            </div>
          </button>
        </div>
        <div className=" flex flex-col h-dvh w-full  sm:mr-16 order-1 lg:order-2">

          <div className="flex justify-center mb-16 text-4xl md:text-5xl mt-24 font-RedHatItalic font-medium text-center">
            {data ? data.honey_name : 'Ładowanie...'}
          </div>
          <div>
            <div className="text-lg sm:text-2xl  border-t-2 border-black pt-8 font-RedHatItalic font-light italic mx-8" />
            <ul className="text-xl md:text-2xl font-normal mb-12 mt-10 font-RedHatItalic font-light italic">
              {data && data.type !== 'zestaw' && data.properties_title ? (
                data.properties_title.map((property, index) => (
                  <li className="text-justify my-4 mx-8 lg:mx-2  xl:mx-8">{property}</li>
                ))
              ) : data.properties_title.map((property, index) => (
                <li className={`text-justify  ${index === 1 || index === 2 || index === 3 ? 'list-disc my-4 mx-10' : ''}`}>{property}</li>
              ))}

            </ul>
            {data.type === 'honey' || data.type === 'fruit' ? <div className="text-center my-4 font-RedHatItalic font-light italic text-2xl">Dostępne rozmiary</div> : ''}
            <div className="flex flex-row justify-center font-RedHatItalic font-light italic">
              {data && data.type === 'honey' || data.type === 'alkohol' ? (
                <div className="flex flex-col items-center mx-10 text-lg">
                  <div className="bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium w-[200px]">
                    <div className="text-center">{`Waga Netto: ${data.grammar_for_big}`}</div>
                    <div className="text-center">{`Cena: ${data.prize_for_big}`}</div>
                  </div>
                  <div className="w-20 h-20 my-4">
                    <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/big jar.png" alt="" />
                  </div>
                </div>
              ) : ''}

              {data && data.type === 'fruit' || data.type === 'leki' ? (
                <div className="flex flex-col items-center  mx-10 font-RedHatItalic font-light italic text-lg">
                  <div className="bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium">
                    <div className="text-center">{`Waga Netto: ${data.grammar_for_small}`}</div>
                    <div className="text-center">{`Cena: ${data.prize_for_small}`}</div>
                  </div>
                  <div className="w-12 h-12  mt-4 mb-4">
                    <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/small jar.png" alt="" />
                  </div>
                </div>
              ) : ''}

              {data && data.type === 'ozdoby' ? (
                <div className="flex flex-col items-center  mx-10 font-RedHatItalic font-light italic text-lg">
                  <div className="bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium">
                    <div className="text-center">{`Ilośc: ${data.grammar_for_small}`}</div>
                    <div className="text-center">{`Cena za 1 szt: ${data.prize_for_small}`}</div>
                  </div>
                  <div className="w-12 h-12  mt-4 mb-4">
                    <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/small jar.png" alt="" />
                  </div>
                </div>
              ) : ''}

              {data && data.type === 'zestaw' ? (
                <div className="flex flex-col items-center  mx-10 font-RedHatItalic font-light italic text-lg">
                  <div className="bg-gradient-to-r from-[#e05960] to-[#f78e8e] py-2 px-4 rounded-tl-lg rounded-br-lg font-medium">
                    <div className="text-center">{`Zawartość: ${data.grammar_for_small}`}</div>
                    <div className="text-center">{`Cena za zestaw: ${data.prize_for_small}`}</div>
                  </div>
                  <div className="w-12 h-12  mt-4 mb-4">
                    <img className="w-full h-full  rounded-lg object-cover hover:scale-125 cursor-pointer" src="/Domino/Icons/small jar.png" alt="" />
                  </div>
                </div>
              ) : ''}

            </div>
          </div>

        </div>
      </div>
      {data.type !== 'ozdoby' && data.type !== 'zestaw' ? (
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
                  data.properties.map((photo, index) => (
                    <ul>
                      <li className="list-disc my-4 mx-2 md:mx-8">{photo}</li>
                    </ul>
                  ))
                ) : 'Ładowanie'}
              </div>
            </div>

          </div>
        </div>
      ) : ''}
      <Footer />
    </div>
  );
}

export default Produkt;
