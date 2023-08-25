import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Ofirmie() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className="flex flex-col items-center mt-20 mb-12 w-full">
        <div className="flex flex-row">
          
          <Image
            id="logo"
            src="/Benedykt.jpg"
            width={500}
            height={300}
            style={{ height: '500px' }}
            className="rounded-lg rotate-x-[50deg] drop-shadow-lg mr-8"
            priority
          />
          <div className=" flex text-center flex-col w-[600px] h-full p-8">
            <div className="text-4xl mb-8 font-RedHatItalic font-medium italic">O mnie</div>
            <div className="text-2xl font-RedHatItalic font-light">
            Benedykt Możdżeń, absolwent Wydziału Ceramiki i Szkła ASP we Wrocławiu. Dyplom w pracowni prof. Krystyny Cybińskiej. Zajmuje się ceramiką unikatową i przemysłową. Prace artystyczne znajdują się w zbiorach prywatnych i muzeach. Inspiracji dla swoich prac poszukuje w pięknie natury organicznej. Projektuje i wykonuje elementy dekoracyjne i użytkowe do wnętrz takie jak lampy, wazony, patery, formy przestrzenne.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 mb-12 w-full">
        <div className="flex flex-row">
        <Image
            id="logo"
            src="/LotosOff.jpg"
            width={500}
            height={300}
            style={{ height: '600px' }}
            className="rounded border-2 border-black shadow-xl"
            priority
          />
          <div className=" flex text-center flex-col w-[600px] h-full p-8 mx-8">
            <div className="text-4xl mb-8 font-RedHatItalic font-medium italic">Filozofia</div>
            <div className="text-2xl font-RedHatItalic font-light">
            Wykorzystując przeświecalność porcelany i autorską technikę tworzę nastrojowe i unikatowe lampy. Każda jest niepowtarzalna, ma indywidualny charakter, łączy funkcjonalność z oryginalną formą. Lampy dzięki ręcznemu procesowi tworzenia zyskują duszę i charakter. Forma i światło pozwalają na aranżację niepowtarzalnej i nastrojowej przestrzeni.Porcelana jest szlachetnym i wymagającym tworzywem ceramicznym. Proces powstawania dzieła wymaga cierpliwości i czasu, ale efekt końcowy jest ukoronowaniem pasji tworzenia.
            </div>
          </div>
          <Image
            id="logo"
            src="/LotosOn.jpg"
            width={500}
            height={300}
            style={{ height: '600px' }}
            className="rounded border-2 border-black shadow-xl"
            priority
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
