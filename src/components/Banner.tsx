"use client";

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-screen">
      {/* Image with dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50">
        <Image 
          src="/images/image.png" 
          alt="Banner Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
      </div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        {/* Heading with Melodrama font */}
        <h1 className="w-509 h-172 text-4xl md:text-6xl font-bold mb-4 font-melodrama text-center">
          Look within yourself and discover
        </h1>
        <p className="text-lg md:text-xl mb-6">
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when.
        </p>
        <button className="bg-green hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Banner;


