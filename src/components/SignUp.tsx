import React from "react";
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function SignUp() {
  return (
    <section className="max-w-[1440px] mx-auto  px-8 bg-customColors-light-grey">
      <div className="relative w-full h-[444px] bg-cover bg-center overflow-hidden">
        <Image
          src="/images/signup.jpg"
          alt="Newsletter Sign-Up Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 bg-black bg-opacity-0">
          <h2 className="text-3xl font-bold mb-4">
            Join the club and get the benefits
          </h2>
          <p className=" mb-6 text-center">
            Sign up for our newsletter and receive exclusive offers on <br />
            new ranges, sales, pop-up stores, and more
          </p>
          <div className="flex mb-6">
            <div className="flex items-center">
              <IoCheckmarkCircleSharp size={25} /><h4 className="text-lg mr-2">Exclusive offers</h4>
            </div>
            <div className="flex items-center">
         <IoCheckmarkCircleSharp size={25} /><h4 className="text-lg mr-2">Free events</h4>
            </div>
            <div className="flex items-center">
             <IoCheckmarkCircleSharp size={25} /> <h4 className="text-lg mr-2">Large discounts</h4>
            </div>
          </div>
          <div className="flex sm:flex-row w-full max-w-sm">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-2 text-black"
            />
            <button className="px-6 py-2 bg-customColors-dark-primary text-white font-medium">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
