import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Kontakt() {
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
            height={200}
            priority
          />
        </div>
        <Navbar />
        <div> </div>
      </div>
      <div className=" flex justify-center mt-20 w-full">
        <div>
          <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " action="/send-data-here" method="post">
            <label className="mb-4" htmlFor="first">
              <div>Imie:</div>
              <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="first" name="first" placeholder="Andrzej" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <div>Nazwisko:</div>
              <input className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="last" name="last" placeholder="Grabarz" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <div>Email:</div>
              <input className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="last" name="last" placeholder="andgra01@gmail.com" required />
            </label>
            <label className="mb-4" htmlFor="last">
              <div>Telefon:</div>
              <input className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="last" name="last" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
            </label>
            <label>
              <div className="mb-4">Pytania:</div>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="postContent" rows={4} cols={40} />
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </form>
        </div>
        <div className=" flex text-center flex-col w-[500px] p-8">
          <div className="text-3xl mb-8">Dane Kontaktowe</div>
          <div className="text-xl mb-4">
            Email:
            <span className="text-xl"> BielIBlask@gmail.com</span>
          </div>
          <div className="text-xl mb-8">
            Email:
            <span className="text-xl"> Prywatny@gmail.com</span>
          </div>
          <div className="text-xl mb-8">
            Telefon:
            <span className="text-xl">  +48 123 123 123</span>
          </div>
          <div className="text-xl">
            Szukasz czegoś innego? Masz własny pomysł na kształt i kolor abażura? Nie bój się napisać do nas- jesteśmy mili ludzie 😉 Pomożemy, doradzimy. Odpowiedź otrzymasz odrazu albo w ciągu 2 nastepnych dni w razie czego zawsze może dzwonić od 8:00 do 15:00. Lampy same się nie zrobią
          </div>
        </div>
      </div>
      <div className="flex justify-center text-4xl w-full py-4 mt-16 mb-8 custom-underline-overline">
        Najczęście zadawane pytania
      </div>
      <div className="flex flex-col my-8 mx-20 text-xl">
        <div className="mb-6">
          <div className="text-2xl underline underline-offset-8 py-4" id="Pytanie">Czy możecie stworzyć lampę na zamówienie z moim własnym projektem lub pomysłem?</div>
          <div id="Odpowiedź">Tak, jesteśmy specjalistami w tworzeniu customowych lamp na podstawie Twojego pomysłu lub projektu. Skontaktuj się z nami, aby omówić szczegóły!</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl underline underline-offset-8 py-4" id="Pytanie">Jakie materiały są dostępne do stworzenia customowej lampy?</div>
          <div id="Odpowiedź">Mamy szeroki wybór materiałów, takich jak drewno, metal, szkło, ceramika i inne. Możemy dostosować lampę do Twoich preferencji pod względem materiałów i stylu.</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl underline underline-offset-8 py-4" id="Pytanie">Czy mogę wybrać kształt, rozmiar i kolor lampy na zamówienie?</div>
          <div id="Odpowiedź">Oczywiście! Jesteśmy gotowi dostosować kształt, rozmiar, kolor i inne detale, aby stworzyć lampę idealnie pasującą do Twojego wnętrza.</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl underline underline-offset-8 py-4" id="Pytanie">Ile czasu zajmuje stworzenie customowej lampy?</div>
          <div id="Odpowiedź">Czas produkcji zależy od skomplikowania projektu i obciążenia pracą. Zazwyczaj informujemy o szacunkowym czasie realizacji przy składaniu zamówienia.</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl underline underline-offset-8 py-4" id="Pytanie">Czy oferujecie usługę instalacji customowej lampy w moim domu?</div>
          <div id="Odpowiedź">Niestety, nie oferujemy usług instalacyjnych, ale zapewnimy szczegółowe instrukcje montażu. W razie pytań lub problemów jesteśmy dostępni, aby pomóc zdalnie.</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
