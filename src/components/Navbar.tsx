import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <div className="navbar p-5">
      {/* Top Nav */}
      <div className="container mt-4 mx-auto flex justify-between items-center">

        {/* Center Logo */}
        <h1 className="text-2xl text-right font-bold">Avion</h1>

        {/* Left Section */}
        <div className="flex hidden lg:flex justify-end mb-2 gap-5 items-center text-md text-left">
          <Link href={"/"} className="bg-customColors-primary p-2 px-6 text-white hover:bg-customColors-border-dark hover:text-customColors-dark-primary hover:font-bold">Home</Link>
          <Link href={"/product-listings"} className="bg-customColors-primary p-2 px-6 text-white hover:bg-customColors-border-dark hover:text-customColors-dark-primary hover:font-bold">Listing</Link>
          <Link href={"/cart"} className="bg-customColors-primary p-2 px-6 text-white hover:bg-customColors-border-dark hover:text-customColors-dark-primary hover:font-bold">Shopping Cart</Link>
          <MdOutlineShoppingCart className="top-[26px] mr-4" />
          <FaRegUserCircle className="mr-4"/>
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

      {/* Mobile Menu */}
      <Sheet>
        <div className="flex mr-5 items-center justify-end">
        <SheetTrigger className=" lg:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger> 
        </div>
        <SheetContent className="p-4">
        <div className="flex justify-end gap-5 items-center text-md text-left">
          <Link href={"/product-listings"}>Listing</Link>
          <Link href={"/product-listing"}>Sample Product</Link>
          <Link href={"/cart"}>Shopping Cart</Link>
          <MdOutlineShoppingCart className="top-[26px] mr-4" />
          <FaRegUserCircle className="mr-4"/>
          <IoSearch />
        </div>
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item, index) => (
            <Link href="#" key={index} className="block text-gray-700 hover:text-black mb-2">
              {item}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
