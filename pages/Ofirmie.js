import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Ofirmie() {
  return (
    <main className=" min-h-screen w-full items-center ">
      <Navbar />

      <div className="max-w-[1530px] w-full mx-auto mt-10">
        <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-20">
          <div className="col-span-1 flex flex-col justify-center items-center text-center">

            <h1 className="text-2xl md:text-3xl font-bold my-10">Kim jesteśmy?</h1>
            <div className="text-justify font-medium m-7 text-md md:text-xl md:text-center">
              Nasza firma to efekt rodzinnej pasji i zaangażowania, które pozwoliły nam zbudować wyjątkową pasiekę na obrzeżach Gryżyńskiego Parku Krajobrazowego, pośród lasów i łąk. To wspólna praca Dominika Dominikowskiego, jego żony Aleksandry, której wsparcie i pomysły są nieocenione, oraz rodziców, którzy przekazali swoją wiedzę i doświadczenie. Dzięki naszej współpracy tworzymy produkty najwyższej jakości: miody klasyczne, smakowe, a także wyroby z wosku pszczelego. Wszystko to z myślą o dostarczaniu Wam naturalnych i zdrowych produktów, zawsze w zgodzie z naturą i poszanowaniem dla pszczół.
            </div>

          </div>
          <div className="col-span-1 md:mr-4">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/boss.jpg"
              alt="Szef Dominik"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center md:ml-4">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/Produkcja.jpg"
              sizes="100vw"
              alt="Zdjęcie z produkcji"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Jak powstaje nasz miód?</h1>
            <div className="text-justify font-medium m-7 text-md md:text-xl md:text-center">
              Odsklepianie plastrów – Po zebraniu ramek z ula, pszczelarz przystępuje do odsklepiania plastrów. Pszczoły zamykają każdą komórkę plastra cienką warstwą wosku, aby chronić dojrzały miód. Do odsklepiania używa się specjalnych noży pszczelarskich lub widelców, które usuwają woskową powłokę, nie uszkadzając samego plastra.

              Odwirowywanie miodu – Odkryte plastry umieszcza się w miodarce, czyli urządzeniu działającym na zasadzie wirówki. Dzięki sile odśrodkowej miód zostaje wyciągnięty z komórek plastra, ściekając po ściankach urządzenia do dolnego zbiornika. Ten proces pozwala na wydobycie miodu, nie niszcząc plastrów, które mogą być ponownie wykorzystane przez pszczoły.

              Filtrowanie miodu – Świeżo odwirowany miód zawiera drobinki wosku, pyłki i inne zanieczyszczenia, które są usuwane poprzez przefiltrowanie go przez specjalne sita. Dzięki temu miód staje się czystszy, ale nadal zachowuje wszystkie naturalne składniki odżywcze, takie jak enzymy, witaminy i minerały.

              Dodatkowe przetwarzanie (opcjonalnie) – Niektóre odmiany miodu są kremowane, co nadaje im gładką, aksamitną konsystencję. Proces ten polega na delikatnym mieszaniu miodu, co zapobiega krystalizacji i sprawia, że miód jest bardziej miękki i łatwiejszy do rozsmarowywania. W przypadku miodów smakowych, do naturalnego miodu dodaje się składniki takie jak owoce, zioła czy przyprawy, aby uzyskać różnorodne wersje smakowe.
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Nasz zespół i pszczoły</h1>
            <div className="text-justify font-medium m-7 text-md md:text-xl md:text-center">
              Za sukcesem naszej pasieki stoją nie tylko pracowite pszczoły,
              ale i ludzie z pasją do pszczelarstwa. Każdy członek zespołu dba
              o to, by pszczoły miały najlepsze warunki do pracy, a nasz miód był
              najwyższej jakości. Współpraca z naturą to dla nas klucz do sukcesu
            </div>
          </div>
          <div className="col-span-1 md:mr-4">
            <div className="grid grid-cols-3">
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 1.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 2.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 3.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/Pszczoła 4.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 5.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-6.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/pszczoła-7.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-8.jpg" alt="pszczoła" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-9.jpg" alt="pszczoła" />
              </div>
            </div>
          </div>
          <div className="my-10 md:my-0 md:ml-4 col-span-1">
            <div className="grid grid-cols-3">
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina 1.jpg" alt="kwiaty" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina-2.jpg" alt="kwiaty" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina-3.jpg" alt="kwiaty" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Skąd czerpiemy naturę</h1>
            <div className="text-justify font-medium m-7 text-md md:text-xl md:text-center">
              Nasze pszczoły czerpią nektar z dzikich łąk i kwiecistych terenów
              Zielonej Góry. Dbamy o to, by nasze pasieki znajdowały się w ekologicznie
              czystych terenach, co przekłada się na jakość i wyjątkowy smak naszych miodów.
              Rośliny, z których korzystają pszczoły, są naszą inspiracją
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Nasza okolica</h1>
            <div className="text-justify font-medium m-7 text-md md:text-xl md:text-center">
              Zielona Góra to nie tylko miasto, ale przede wszystkim
              miejsce, gdzie natura i tradycja idą w parze. To tutaj, w otoczeniu
              malowniczych krajobrazów, nasze pszczoły mają dostęp do różnorodnych
              roślin, co wpływa na bogaty smak naszych produktów. Zachwyć się pięknem
              naszej okolicy, z której czerpiemy to, co najlepsze
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center md:mr-4">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/okolica 1.jpg"
              alt="Nasz okolica"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
