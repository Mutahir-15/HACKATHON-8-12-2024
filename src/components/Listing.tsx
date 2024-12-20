import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Listing() {
    return (
        <section className=" max-w-[1440px] mx-auto py-16 px-8 bg-white">
          <div className="lg:w-[1440px] grid grid-cols-2 lg:grid-cols-4 ">
            {/* Product 1 */}
            <div className="flex flex-col items-left p-6 hover:shadow-md hover:scale-105 transition-transform duration-300">
              <Image src="/images/listing1.png" alt="The Dandy chair" width={305} height={375} className="mb-4" />
              <h3 className="text-lg mb-2">The Dandy chair</h3>
              <p className="text-gray-800 text-xl mb-2">£250</p>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col items-left p-6 hover:shadow-md hover:scale-105 transition-transform duration-300">
              <Image src="/images/listing2.png" alt="Rustic Vase Set" width={305} height={375} className="mb-4" />
              <h3 className="text-lg mb-2">Rustic Vase Set</h3>
              <p className="text-gray-800 text-xl mb-2">£155</p>
            </div>
            {/* Product 3 */}
            <div className="flex flex-col items-left p-6 hover:shadow-md hover:scale-105 transition-transform duration-300">
              <Image src="/images/listing3.png" alt="The Silky Vase" width={305} height={375} className="mb-4" />
              <h3 className="text-lg mb-2">The Silky Vase</h3>
              <p className="text-gray-800 text-xl mb-2">£125</p>
            </div>
            {/* Product 4 */}
            <div className="flex flex-col items-left p-6 hover:shadow-md hover:scale-105 transition-transform duration-300">
              <Image src="/images/listing4.png" alt="The Lucy Lamp" width={305} height={375} className="mb-4" />
              <h3 className="text-lg mb-2">The Lucy Lamp</h3>
              <p className="text-gray-800 text-xl mb-2">£399</p>
            </div>  
          </div>
          <div className="text-center mt-8">
            <button className="w-full md:w-[170px] px-30 lg:px-8 py-3 bg-gray-300 text-black font-medium hover:bg-gray-800 hover:text-white">
            <Link href="/product-listings">View collection</Link>
            </button>
          </div>
        </section>
      );
}
export default Listing