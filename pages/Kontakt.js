import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center">
        <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center ">
          <Contact />
          <div className="sm:flex sm:flex-col lg:w-3/12 m-8 sm:m-8 md:mx-16 lg:mx-20 xl:mx-32  lg:m-8 ">
            <div className="text-2xl sm:text-3xl 4xl:text-4xl mb-8 font-RedHatItalic font-medium text-center">Dane Kontaktowe</div>
            <div className="text-xl 4xl:text-3xl mb-4  font-RedHatItalic font-light">
              Email:
              <span className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light">  dominikdominikowski5@gmail.com</span>
            </div>
            <div className="text-lg 4xl:text-3xl sm:text-xl mb-8 font-RedHatItalic font-light">
              Telefon:
              <span className="text-lg 4xl:text-2xl  sm:text-xl font-RedHatItalic font-light">  +48 507 067 260</span>
            </div>
            <div className="text-lg 4xl:text-2xl sm:text-xl font-RedHatItalic font-light text-center">
              Szukasz czegoś wyjątkowego? Masz pytania, które cie nurtują? Nie bój się napisać do nas jesteśmy mili ludzie 😉 Pomożemy, doradzimy. Odpowiedź otrzymasz odrazu albo w ciągu 2 nastepnych dni w razie czego zawsze może dzwonić od 8:00 do 15:00. Miód sam się nie zbierze.
            </div>
          </div>
        </div>
        <div className="flex justify-center text-4xl w-full py-4 mt-20 mb-8 custom-underline-overline font-RedHatItalic font-medium italic">
          FAQ
        </div>
        <div className="flex flex-col my-8 mx-10 md:mx-20 lg:mx-30 xl:mx-40 text-justify">

          <div className="mb-16">
            <div className="text-xl sm:text-2xl 2xl:text-2xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Jakie rodzaje miodów są dostępne?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl ">W naszej ofercie znajdziesz klasyczne miody pszczele, miody smakowe z naturalnymi dodatkami, produkty zdrowotne (krople z propolisu, maść, pyłek pszczeli, pierzga) oraz ręcznie wykonane ozdoby z wosku pszczelego. Każdy produkt jest dokładnie opisany na stronie, by ułatwić wybór idealnego rozwiązania dla Ciebie.</div>

          </div>

          <div className="mb-16">
            <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Ile czasu trwa realizacja zamówienia?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl">Czas realizacji zależy od rodzaju zamówienia i dostępności składników. Zwykle podajemy szacunkowy czas realizacji przy składaniu zamówienia, ale standardowe zamówienia realizujemy szybko i sprawnie.</div>

          </div>


          <div className="mb-16">
            <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy miody smakowe zawierają sztuczne dodatki?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl">Nie, nasze miody smakowe są w 100% naturalne. Są przygotowywane z najwyższej jakości naturalnego miodu pszczelego, do którego dodajemy wyłącznie liofilizowane owoce, przyprawy lub inne naturalne składniki. Proces liofilizacji pozwala zachować pełnię wartości odżywczych i naturalny smak owoców, a jednocześnie wyklucza potrzebę stosowania sztucznych konserwantów, barwników czy aromatów. Dzięki temu możesz cieszyć się zdrowym i naturalnym produktem o wyjątkowym smaku.</div>
          </div>

          <div className="mb-16">
            <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę zwrócić miód, jeśli nie spełni moich oczekiwań?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl">Ze względu na charakter produktu spożywczego, zwroty nie są możliwe. Jeśli jednak produkt jest uszkodzony lub nie spełnia oczekiwań, prosimy o kontakt, a postaramy się rozwiązać problem.</div>
          </div>

          <div className="mb-16">
            <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy mogę zamówić większe ilości miodu na prezent lub do firmy?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl">Tak, oferujemy możliwość zamówienia większych ilości miodu oraz spersonalizowanych zestawów prezentowych. W przypadku większych zamówień lub zamówień firmowych prosimy o kontakt z odpowiednim wyprzedzeniem, abyśmy mogli zapewnić dostępność produktów i przygotować je zgodnie z Twoimi oczekiwaniami. Zapewniamy również eleganckie opakowania, idealne na każdą okazję.</div>
          </div>

          <div className="mb-16">
            <div className="text-xl sm:text-2xl 4xl:text-3xl underline underline-offset-8 py-4 font-RedHatItalic italic" id="Pytanie">Czy oferujecie próbki miodów?</div>
            <div id="Odpowiedź" className="font-RedHatItalic font-light text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-2xl">Tak, oferujemy możliwość zamówienia próbek miodów w małych słoiczkach. To doskonała okazja, aby spróbować różnych smaków przed zakupem większych opakowań. W celu zamówienia próbek prosimy o kontakt.</div>
          </div>

        </div>
        <Footer />
      </main>
    </>
  );
}
