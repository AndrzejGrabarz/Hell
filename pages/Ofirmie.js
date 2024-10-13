import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Ofirmie() {
  return (
    <main className=" min-h-screen w-full items-center ">
      <Navbar />

      <div className="max-w-[1530px] w-full mx-auto mt-10">
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-1 flex flex-col justify-center items-center text-center">

            <h1 className="text-3xl font-bold my-10">Kim jesteśmy?</h1>
            <div className="text-xl text-center font-medium">
              Nasza firma to połączenie pasji i natury, a za jej sukcesem stoi Dominik Dominikowski, który od pięciu lat prowadzi rodzinną pasiekę w sercu Zielonej Góry. Jego miłość do pszczelarstwa zrodziła się z chęci dostarczania ludziom naturalnych, zdrowych produktów. Dzięki jego zaangażowaniu i doświadczeniu, nasza oferta obejmuje miody klasyczne, smakowe, pitne oraz wyroby z wosku pszczelego. Naszym celem jest przybliżenie Wam smaku natury w najczystszej formie, zawsze z poszanowaniem dla pszczół i środowiska
            </div>

          </div>
          <div className="col-span-1">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/boss.jpg"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/Produkcja.jpg"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Jak powstaje nasz miód?</h1>
            <div className="text-xl text-center font-medium">
              Odsklepianie plastrów – Po zebraniu ramek z ula, pszczelarz przystępuje do odsklepiania plastrów. Pszczoły zamykają każdą komórkę plastra cienką warstwą wosku, aby chronić dojrzały miód. Do odsklepiania używa się specjalnych noży pszczelarskich lub widelców, które usuwają woskową powłokę, nie uszkadzając samego plastra.

              Odwirowywanie miodu – Odkryte plastry umieszcza się w miodarce, czyli urządzeniu działającym na zasadzie wirówki. Dzięki sile odśrodkowej miód zostaje wyciągnięty z komórek plastra, ściekając po ściankach urządzenia do dolnego zbiornika. Ten proces pozwala na wydobycie miodu, nie niszcząc plastrów, które mogą być ponownie wykorzystane przez pszczoły.

              Filtrowanie miodu – Świeżo odwirowany miód zawiera drobinki wosku, pyłki i inne zanieczyszczenia, które są usuwane poprzez przefiltrowanie go przez specjalne sita. Dzięki temu miód staje się czystszy, ale nadal zachowuje wszystkie naturalne składniki odżywcze, takie jak enzymy, witaminy i minerały.

              Dodatkowe przetwarzanie (opcjonalnie) – Niektóre odmiany miodu są kremowane, co nadaje im gładką, aksamitną konsystencję. Proces ten polega na delikatnym mieszaniu miodu, co zapobiega krystalizacji i sprawia, że miód jest bardziej miękki i łatwiejszy do rozsmarowywania. W przypadku miodów smakowych, do naturalnego miodu dodaje się składniki takie jak owoce, zioła czy przyprawy, aby uzyskać różnorodne wersje smakowe.
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Nasz zespół i pszczoły</h1>
            <div className="text-xl text-center font-medium">
              Za sukcesem naszej pasieki stoją nie tylko pracowite pszczoły,
              ale i ludzie z pasją do pszczelarstwa. Każdy członek zespołu dba
              o to, by pszczoły miały najlepsze warunki do pracy, a nasz miód był
              najwyższej jakości. Współpraca z naturą to dla nas klucz do sukcesu
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-3">
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 1.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 2.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 3.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/Pszczoła 4.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła 5.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-6.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/pszczoła-7.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-8.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full rounded-lg object-cover" src="/Domino/pszczoła-9.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-3">
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina 1.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina-2.jpg" alt="" />
              </div>
              <div className="w-full h-60">
                <img className="h-full w-full  rounded-lg object-cover" src="/Domino/roślina-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Skąd czerpiemy naturę</h1>
            <div className="text-xl text-center font-medium">
              Nasze pszczoły czerpią nektar z dzikich łąk i kwiecistych terenów
              Zielonej Góry. Dbamy o to, by nasze pasieki znajdowały się w ekologicznie
              czystych terenach, co przekłada się na jakość i wyjątkowy smak naszych miodów.
              Rośliny, z których korzystają pszczoły, są naszą inspiracją
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold my-10">Nasza okolica</h1>
            <div className="text-xl text-center font-medium">
              Zielona Góra to nie tylko miasto, ale przede wszystkim
              miejsce, gdzie natura i tradycja idą w parze. To tutaj, w otoczeniu
              malowniczych krajobrazów, nasze pszczoły mają dostęp do różnorodnych
              roślin, co wpływa na bogaty smak naszych produktów. Zachwyć się pięknem
              naszej okolicy, z której czerpiemy to, co najlepszef asfsa
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <Image
              className="rounded shadow-2xl"
              src="/Domino/okolica 1.jpg"
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
