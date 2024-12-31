'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fetchProducts from '../app/api/fetchProducts'; 

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Listing = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    getProducts();
  }, []);  

  return (
    <section className="max-w-[1440px] mx-auto py-16 px-4 md:px-8 bg-white">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image 
              src={product.image} 
              alt={product.title} 
              width={200} 
              height={200} 
              className="object-contain mb-4" 
            />
            <h3 className="text-lg font-medium text-gray-800 mb-2 text-center">{product.title}</h3>
            <p className="text-gray-700 text-lg font-semibold mb-2">£{product.price}</p>
          </div>
        ))}
      </div>
      
      {/* Button Section */}
      <div className="text-center mt-10">
        <Link href="/product-listings">
          <button className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-black font-medium rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300">
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Listing;
