import React from 'react';
import Image from 'next/image';

function ImageBox({ photo }) {
  return (
    <div className="flex px-12 py-8">
      <Image
        src={`/${photo}.jpg`}
        alt="Wstęp"
        width={300}
        height={300}
      />
    </div>
  );
}

export default ImageBox;
