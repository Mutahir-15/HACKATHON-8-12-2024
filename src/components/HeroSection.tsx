import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row bg-white">
      {/* Background Image */}
      <div className="relative p-80 h-[304px] sm:h-[500px] md:h-[709px] w-full">
        <Image
          src="/images/HSimage1.jpg"
          alt="Hero Section Image"
          layout="fill"
          className="w-full h-screen object-cover bg-cover bg-center"
        />
      </div>

      {/* Text Box */}
      <div className="absolute flex flex-col md:flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen max-w-2xl sm:w-[630px] md:w-[1290px] sm:ml-[330px] h-[444px] bg-white py-20 px-8 text-left">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Shop the new Spring 2022 collection today
          </p>
          {/* Button Here */}
          <button className="mt-24 px-6 py-3 bg-customColors-dark-primary text-white font-medium hover:bg-gray-800">
            <Link href="/product-listings">View collection</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
