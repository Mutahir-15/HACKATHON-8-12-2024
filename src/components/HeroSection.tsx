import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto  flex flex-col bg-white">
      {/* Background Image */}
      <div className="relative  h-[75vh] w-full">
        <Image
          src="/images/HSimage1.jpg"
          alt="Hero Section Image"
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Box */}
      <div className="grid sm:w-screen absolute w-[630px] h-[444px] max-w-2xl py-20 px-8 ml-[330px] bg-white sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-left">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-2xl  md:text-4xl font-bold text-gray-800 leading-snug">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Shop the new Spring 2022 collection today
          </p>
          {/* Button Here */}
          <button className="mt-24 px-6 py-3 bg-customColors-dark-primary text-white font-medium hover:bg-gray-800">
            View collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
