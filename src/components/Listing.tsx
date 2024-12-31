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
    <section className="max-w-[1440px] mx-auto py-16 px-8 bg-white">
      <div className="lg:w-[1440px] grid grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-left p-6 hover:shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={product.image} alt={product.title} width={305} height={375} className="mb-4" />
            <h3 className="text-lg mb-2">{product.title}</h3>
            <p className="text-gray-800 text-xl mb-2">£{product.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="w-full md:w-[170px] px-30 lg:px-8 py-3 bg-gray-300 text-black font-medium hover:bg-gray-800 hover:text-white">
          <Link href="/product-listings">View collection</Link>
        </button>
      </div>
    </section>
  );
};

export default Listing;
