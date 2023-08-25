import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';

function Lampa() {
  const router = useRouter();
  const { lampname } = router.query;
  const data = router.query.data ? (JSON.parse(router.query.data)) : null;

  function show() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
    console.log(data.morePhotos);
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <div className="flex items-center min-h-screen  w-full ">
        <Modal data={data} />
        <div className=" flex flex-col min-h-screen w-3/4 p-8 items-center">
          <button type="submit" onClick={show} className="cursor-pointer">
            <Image
              id="logo"
              src={data.lampOffSrc}
              // src="/LotosOn.jpg"
              width={600}
              height={550}
              style={{ height: 'auto' }}
              className="mt-20 border-2 border-black"
              priority
            />
          </button>
          <div className="flex flex-row items-center justify-center mt-20">
            {/* <button className="mr-8" id="myButton">&#10094;</button> */}
            {data.morePhotos.map((photo, index) => (
              <Image
                id="logo"
                src={photo}
                width={150}
                height={150}
                style={{ height: '150px' }}
                className="border-2 border-black hover:scale-125 rounded mx-2"
                priority
              />
            ))}
            {/* <button className="ml-8" id="myButton">&#10095;</button> */}
          </div>
        </div>
        <div className=" flex flex-col min-h-screen w-full pr-12 py-8 ">
          <div className="flex flex-col w-[1100px] ">
            <div className="flex justify-center mb-16 text-6xl mt-24 font-RedHatItalic font-medium italic">
              {/* {data.name} */}
              {' '}
              Lotos
            </div>
            <div>
              <div className="flex justify-center text-4xl mb-8 underline-offset-4">Opis</div>
              <div className="text-2xl break-all border-t-2 border-black pt-8 font-RedHatItalic font-light italic">
                {/* {data.description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit architecto mollitia veniam possimus consequatur tempora nobis! Sint quas impedit voluptates mollitia delectus beatae nulla, quis vel quaerat, ullam et laudantium eos repudiandae eaque doloremque temporibus neque alias unde. Reprehenderit eligendi quis doloribus voluptas officiis nesciunt sunt non quasi at sed, quod asperiores praesentium! Sequi ipsa nobis aspernatur blanditiis dolor quibusdam saepe dignissimos quasi ex molestiae at harum illo architecto totam, quo sit modi repellat explicabo, itaque cum eius magnam? Nobis quaerat, adipisci temporibus, blanditiis aperiam eveniet repudiandae est ipsum ab reiciendis, fugiat itaque possimus eaque! Aperiam nesciunt aut ipsum.
              </div>
            </div>
            <div>
              <div className="flex justify-center text-4xl my-8">Wykonanie</div>
              <div className="text-2xl break-all border-t-2 border-black pt-8 font-RedHatItalic font-light italic">
                {/* {data.description} */}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam perferendis et, qui beatae suscipit culpa voluptatibus est accusamus. Quia facere vero quo quos expedita, voluptas quod magni reiciendis saepe omnis debitis esse? A distinctio praesentium eos consequatur nobis dignissimos. Facere ducimus consectetur dolores dicta quia molestias optio quo incidunt eos quas vel id, est autem, culpa reprehenderit quidem quasi ad nihil maiores hic, molestiae maxime deleniti! Illum, quo. Voluptates iste mollitia placeat earum possimus hic ullam ipsa at nemo molestiae ratione dolorem deserunt doloribus non veniam tempore sit illo vero odit aliquam voluptatibus architecto eos, unde nobis. Sed, debitis dolor?
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
