import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Kontakt() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center mt-8 sm:mt-20">
        <Contact />
        <div className="sm:flex sm:flex-col lg:w-3/12 m-8 sm:m-8 md:mx-64 lg:m-8 ">
          <div className="text-2xl sm:text-3xl 4xl:text-4xl mb-8 font-RedHatItalic font-medium text-center">Dane Kontaktowe</div>
          <div className="text-xl 4xl:text-3xl mb-4  font-RedHatItalic font-light">
            Email:
            <span className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light"> PasiekaDominikowski@gmail.com</span>
          </div>
          <div className="text-lg 4xl:text-3xl sm:text-xl mb-8 font-RedHatItalic font-light">
            Email:
            <span className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light"> Dominik@gmail.com</span>
          </div>
          <div className="text-lg 4xl:text-3xl sm:text-xl mb-8 font-RedHatItalic font-light">
            Telefon:
            <span className="text-lg 4xl:text-2xl  sm:text-xl font-RedHatItalic font-light">  +48 546 867 534</span>
          </div>
          <div className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light text-center">
            Szukasz czegoś wyjątkowego? Masz pytania, które cie nurtują? Nie bój się napisać do nas jesteśmy mili ludzie 😉 Pomożemy, doradzimy. Odpowiedź otrzymasz odrazu albo w ciągu 2 nastepnych dni w razie czego zawsze może dzwonić od 8:00 do 15:00. Miód sam się nie zbierze.
          </div>
        </div>
      </div>
      <div className="flex justify-center text-4xl w-full py-4 mt-20 mb-8 custom-underline-overline font-RedHatItalic font-medium italic">
        FAQ
      </div>
      <div className="flex flex-col my-8 mx-40 text-xl">

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Jakie rodzaje miodów są dostępne?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] 4xl:text-xl sm:text-md">W naszej ofercie znajdziesz szeroki wybór miodów, w tym klasyczne miody pszczele, smakowe miody z dodatkami oraz miody pitne. Dodatkowo oferujemy wyroby z wosku pszczelego.</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Ile czasu trwa realizacja zamówienia na niestandardowy miód?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] 4xl:text-xl sm:text-md">Czas realizacji zależy od rodzaju zamówienia i dostępności składników. Zwykle podajemy szacunkowy czas realizacji przy składaniu zamówienia, ale standardowe zamówienia realizujemy szybko i sprawnie.</div>

        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy oferujecie wysyłkę miodów na terenie kraju i za granicę?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Tak, wysyłamy nasze miody zarówno na terenie Polski, jak i za granicę. W przypadku zamówień międzynarodowych, czas dostawy zależy od wybranego kraju.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę zwrócić miód, jeśli nie spełni moich oczekiwań?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Ze względu na charakter produktu spożywczego, zwroty nie są możliwe. Jeśli jednak produkt jest uszkodzony lub nie spełnia oczekiwań, prosimy o kontakt, a postaramy się rozwiązać problem.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy miody smakowe zawierają sztuczne dodatki?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Nie, nasze miody smakowe są przygotowywane wyłącznie z naturalnych składników, takich jak liofilizowane owoce i naturalny miód pszczeli. Nie dodajemy żadnych sztucznych barwników, aromatów ani konserwantów.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę zwrócić miód, jeśli nie spełni moich oczekiwań?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Ze względu na charakter produktu spożywczego, zwroty nie są możliwe. Jeśli jednak produkt jest uszkodzony lub nie spełnia oczekiwań, prosimy o kontakt, a postaramy się rozwiązać problem.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę zamówić większe ilości miodu na prezent lub do firmy?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Tak, oferujemy możliwość zamówienia większych ilości miodu oraz przygotowania zestawów prezentowych.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy miody są dostępne w różnych pojemnościach?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Tak, oferujemy miody w różnych pojemnościach, takich jak 250g, 500g i 1kg. Dzięki temu każdy klient może wybrać ilość odpowiednią do swoich potrzeb.</div>
        </div>

        <div className="mb-16">
          <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy oferujecie próbki miodów?</div>
          <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] sm:text-md 4xl:text-xl">Tak, oferujemy możliwość zamówienia próbek miodów w małych słoiczkach. To doskonała okazja, aby spróbować różnych smaków przed zakupem większych opakowań. W celu zamówienia próbek prosimy o kontakt.</div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
