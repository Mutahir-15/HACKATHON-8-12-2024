import React from "react";
import Image from "next/image";
import { FaSortDown } from "react-icons/fa6";

function ProductListings() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Image */}
      <div>
        <Image
          src="/images/PLS1.png"
          alt="BG Image"
          width={1440}
          height={209}
          className="w-full"
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap p-5 justify-between items-center gap-4">
        {/* Left Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1">
            <p>Category</p>
            <FaSortDown />
          </div>
          <div className="flex items-center gap-1">
            <p>Sort by</p>
            <FaSortDown />
          </div>
          <div className="flex items-center gap-1">
            <p>Product type</p>
            <FaSortDown />
          </div>
          <div className="flex items-center gap-1">
            <p>Price</p>
            <FaSortDown />
          </div>
          <div className="flex items-center gap-1">
            <p>Brand</p>
            <FaSortDown />
          </div>
        </div>

        {/* Right Sorting */}
        <div className="flex justify-center items-center gap-3">
          <p>Sorting by:</p>
          <div className="flex justify-center items-center gap-1">
            <p>Date added</p>
            <FaSortDown />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {/* Example Product Items */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 bg-white shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 rounded-md"
          >
            <Image
              src={`/images/listing${(index % 8) + 1}.png`}
              alt={`Product ${index + 1}`}
              width={305}
              height={375}
              className="mb-4 w-full rounded"
            />
            <h3 className="text-lg font-semibold mb-2">Product {index + 1}</h3>
            <p className="text-gray-800 text-xl mb-2">£{(index + 1) * 50}</p>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-8">
        <button className="w-full md:w-auto mb-5 lg:mb-10 px-6 py-3 bg-gray-300 text-black font-medium hover:bg-gray-800 hover:text-white rounded">
          View collection
        </button>
      </div>
    </section>
  );
}

export default ProductListings;
