/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Miody from '@/utils/Miody';

function ImageBox({ foreground, background, product }) {
  const [isLampOn, setIsLampOn] = useState(false);

  const selectedProduct = Miody.find((e) => e.name === product);

  const [isPressed, setIsPressed] = useState(true);

  const handleClick = () => {
    setIsPressed(true);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:py-8  sm:my-4 m-10">
      <Link className="" href={`/produkty/${selectedProduct.name}`}>
        <div className="relative w-[250px] h-[325px] sm:w-[280px] sm:h-[364px] md:w-[310px] md:h-[403px] lg:w-[260px] lg:h-[340px] xl:w-[290px] xl:h-[380px] cursor-pointer">
          <Image
            src={`/Domino/Product webp/${isLampOn ? background : foreground}.webp`}
            alt={selectedProduct.name}
            fill
            className="rounded-t-lg shadow-xl object-fit"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={`/Domino/Product webp/${isLampOn ? background : foreground}.webp`}
            priority
          />
        </div>

        <div className="flex flex-col break-normal h-[200px] w-full  bg-white rounded-b-lg justify-center items-center font-medium p-10 ">
          <p className=" text-center max-w-[200px]  text-xl mb-2 break-words">{selectedProduct.honey_name}</p>
          <div className="flex flex-row">
            {selectedProduct.type === 'honey' || selectedProduct.type === 'alkohol' || selectedProduct.type === 'zestaw' ? <button onClick={handleClick} aria-pressed={isPressed} type="button" className="py-1 px-2">{selectedProduct.grammar_for_big}</button> : ''}

            {selectedProduct.type === 'fruit' || selectedProduct.type === 'leki' || selectedProduct.type === 'ozdoby' ? <button onClick={handleClick} aria-pressed={isPressed} type="button" className="py-1 px-2">{selectedProduct.grammar_for_small}</button> : ''}

            {selectedProduct.type === 'specjal' ? (
              <>
                <button onClick={handleClick} aria-pressed={isPressed} type="button" className="py-1 px-2">{selectedProduct.grammar_for_small}</button>
                <button onClick={handleClick} aria-pressed={isPressed} type="button" className="py-1 px-2">{selectedProduct.grammar_for_big}</button>
              </>
            ) : ''}
          </div>
          <p className="text-lg pt-4">{selectedProduct.type === 'honey' || selectedProduct.type === 'alkohol' ? selectedProduct.prize_for_big : selectedProduct.prize_for_small }</p>
        </div>
      </Link>
    </div>
  );
}

export default ImageBox;
