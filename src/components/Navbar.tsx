import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <div className="navbar p-4 md:p-5">
      {/* Top Nav */}
      <div className="container mt-4 mx-auto flex justify-between items-center">
        <div className="flex flex-1 justify-between items-center">
          {/* Main Title */}
          <h1 className="text-2xl text-right font-bold">Avion</h1>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="p-14 w-full">
              <div className="flex justify-end gap-5 items-center text-md text-right">                
                <MdOutlineShoppingCart className="w-6 h-6 " />
                <FaRegUserCircle className="w-6 h-6 " />
                <IoSearch className="w-6 h-6 " />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Plant pots",
                  "Ceramics",
                  "Tables",
                  "Chairs",
                  "Crockery",
                  "Tableware",
                  "Cutlery",
                ].map((item, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="block text-gray-700 hover:text-black mb-2"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left Section */}
        <div className="flex hidden lg:flex justify-end mb-2 gap-5 items-center text-md text-left">
          <Link
            href={"/"}
            className="font-bold p-2  px-6 hover:bg-customColors-dark-primary hover:text-customColors-light-grey hover:font-bold"
          >
            Home
          </Link>
          <Link
            href={"/product-listings"}
            className=" font-bold p-2 px-6 hover:bg-customColors-dark-primary hover:text-customColors-light-grey hover:font-bold"
          >
            Listing
          </Link>
          <Link
            href={"/cart"}
            className="font-bold p-2 px-6 hover:bg-customColors-dark-primary  hover:text-customColors-light-grey hover:font-bold"
          >
            Shopping Cart
          </Link>
          <MdOutlineShoppingCart className="top-[26px] mr-4" />
          <FaRegUserCircle className="mr-4" />
          <IoSearch />
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="container mx-auto flex justify-center space-x-6 py-2 border-t border-gray-200 hidden lg:flex">
        {[
          "Plant pots",
          "Ceramics",
          "Tables",
          "Chairs",
          "Crockery",
          "Tableware",
          "Cutlery",
        ].map((item, index) => (
          <Link href="#" key={index} className="text-gray-700 hover:text-black">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
