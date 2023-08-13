import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Ofirmie() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <div className="flex items-center justify-around font-mono w-full">
        <div className="flex justify-items-end mt-4">
          <Image
            id="logo"
            src="/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={48}
            priority
          />
        </div>
        <Navbar />
        <div> </div>
      </div>
      <div className="flex flex-col items-center mt-20 mb-12 w-full">
        <div className="flex flex-row">
          <Image
            id="logo"
            src="/Benedykt.jpg"
            width={500}
            height={300}
            style={{ height: 'auto' }}
            className="rounded"
            priority
          />
          <div className=" flex text-center flex-col w-[600px] p-8">
            <div className="text-3xl mb-8">Główny Artysta</div>
            <div className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt esse sequi atque accusantium explicabo repudiandae tempora rerum, quibusdam impedit recusandae quidem optio corrupti sint voluptatibus? Delectus aperiam reprehenderit dignissimos, esse cupiditate iure non exercitationem odit unde alias, velit cum omnis, dolore nesciunt pariatur ipsa quibusdam sapiente! Omnis dolor praesentium consequatur vel similique sit deleniti enim quaerat placeat, nostrum qui, est fuga excepturi in, necessitatibus unde veniam! Asperiores quisquam ea maxime optio deleniti temporibus tenetur cum nobis quibusdam nemo voluptatibus modi, impedit similique ut tempore repellendus. Ipsam autem quod, laborum quaerat rem ut, eos quae labore assumenda quo necessitatibus! Nihil.
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-8">
          <div className=" flex text-center flex-col w-[600px] p-8">
            <div className="text-3xl mb-8">Menedżerka</div>
            <div className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt esse sequi atque accusantium explicabo repudiandae tempora rerum, quibusdam impedit recusandae quidem optio corrupti sint voluptatibus? Delectus aperiam reprehenderit dignissimos, esse cupiditate iure non exercitationem odit unde alias, velit cum omnis, dolore nesciunt pariatur ipsa quibusdam sapiente! Omnis dolor praesentium consequatur vel similique sit deleniti enim quaerat placeat, nostrum qui, est fuga excepturi in, necessitatibus unde veniam! Asperiores quisquam ea maxime optio deleniti temporibus tenetur cum nobis quibusdam nemo voluptatibus modi, impedit similique ut tempore repellendus. Ipsam autem quod, laborum quaerat rem ut, eos quae labore assumenda quo necessitatibus! Nihil.
            </div>
          </div>
          <Image
            id="logo"
            src="/Magda.jpg"
            width={500}
            height={300}
            style={{ height: 'auto' }}
            priority
            className="rounded"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 mb-12 w-full">
        <div className="flex flex-row">
          <Image
            id="logo"
            src="/Wstęp.jpg"
            width={1000}
            height={500}
            style={{ height: '500px' }}
            className="rounded"
            priority
          />
          <div className=" flex text-center flex-col justify-center w-full p-8">
            <div className="text-3xl mb-8">Firma</div>
            <div className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt esse sequi atque accusantium explicabo repudiandae tempora rerum, quibusdam impedit recusandae quidem optio corrupti sint voluptatibus? Delectus aperiam reprehenderit dignissimos, esse cupiditate iure non exercitationem odit unde alias, velit cum omnis, dolore nesciunt pariatur ipsa quibusdam sapiente! Omnis dolor praesentium consequatur vel similique sit deleniti enim quaerat placeat, nostrum qui, est fuga excepturi in, necessitatibus unde veniam! Asperiores quisquam ea maxime optio deleniti temporibus tenetur cum nobis quibusdam nemo voluptatibus modi, impedit similique ut tempore repellendus. Ipsam autem quod, laborum quaerat rem ut, eos quae labore assumenda quo necessitatibus! Nihil.
            </div>
          </div>
        </div>
        <div className="flex flex-row  mt-8">
          <div className=" flex text-center flex-col justify-center w-full p-8">
            <div className="text-3xl mb-8">Produkcja Lamp</div>
            <div className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt esse sequi atque accusantium explicabo repudiandae tempora rerum, quibusdam impedit recusandae quidem optio corrupti sint voluptatibus? Delectus aperiam reprehenderit dignissimos, esse cupiditate iure non exercitationem odit unde alias, velit cum omnis, dolore nesciunt pariatur ipsa quibusdam sapiente! Omnis dolor praesentium consequatur vel similique sit deleniti enim quaerat placeat, nostrum qui, est fuga excepturi in, necessitatibus unde veniam! Asperiores quisquam ea maxime optio deleniti temporibus tenetur cum nobis quibusdam nemo voluptatibus modi, impedit similique ut tempore repellendus. Ipsam autem quod, laborum quaerat rem ut, eos quae labore assumenda quo necessitatibus! Nihil.
            </div>
          </div>
          <Image
            id="logo"
            src="/Produkcja.jpg"
            width={900}
            height={600}
            style={{ height: '600px', width: '1000px' }}
            priority
            className="rounded"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
