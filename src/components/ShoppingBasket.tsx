import React from "react";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-8 md:p-20 lg:p-36 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your shopping cart</h1>

      {/* Table Header */}
      <div className="grid grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] text-gray-700 font-medium border-b border-gray-300 pb-4 mb-6">
        <p>Product</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
      </div>

      {/* Product Rows */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] items-center text-gray-700 pb-4">
          <div className="flex items-start space-x-4">
            <div className="w-[109px] h-[134px] relative">
              <Image
                src="/images/cart1.png"
                alt="Graystone vase"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="font-semibold">Graystone vase</h2>
              <p className="text-sm">A timeless ceramic vase with a tri color grey glaze.</p>
              <p className="text-base font-medium mt-2">£85</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              value="1"
              readOnly
              className="w-12 text-center"
            />
          </div>
          <p className="text-right font-medium">£85</p>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] items-center text-gray-700 border-b border-gray-300 pb-4">
          <div className="flex items-start space-x-4">
            <div className="w-[109px] h-[134px] relative">
              <Image
                src="/images/cart2.png"
                alt="Basic white vase"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="font-semibold">Basic white vase</h2>
              <p className="text-sm">Beautiful and simple this is one for the classics.</p>
              <p className="text-base font-medium mt-2">£125</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              value="1"
              readOnly
              className="w-12 text-center"
            />
          </div>
          <p className="text-right font-medium">£125</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between text-gray-700">
        <div className="text-sm">
          <p>Taxes and shipping are calculated at checkout</p>
        </div>
        <div className="text-right mt-6 lg:mt-0">
          <p className="text-lg font-medium">Subtotal <span className="font-bold text-gray-900">£210</span></p>
          <button className="px-6 py-3 mt-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-700">
            Go to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
