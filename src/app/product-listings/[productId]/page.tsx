import React from 'react';
import { notFound } from 'next/navigation';
import { fetchProductById, fetchProductIds, Product } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    productId: string;
  };
}
interface Dimensions {
  width: string;
  height: string;
  depth: string;

}

// Fetch product data on the server
const fetchProductData = async (productId: string): Promise<Product | null> => {
  try {
    const product = await fetchProductById(productId);
    return product || null;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = params;
  const product = await fetchProductData(productId);

  if (!product) {
    notFound(); 
  }

  const { width, height, depth } = product.dimensions as unknown as Dimensions;

  return (
    <main>
     <section className='max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 mt-2 lg:mt-10 gap-8 mx-auto justify-center items-center'>
      {/* Image Section */}
      <div className='w-full lg:w-auto lg:max-w-lg'>
        <Image
          src={product.image_url}
          alt={product.name}
          layout='responsive'
          width={500}
          height={600}
          className='object-contain mb-5 lg:mb-10'
        />
      </div>
      {/* Product Details Section */}
      <div className='flex flex-col gap-4 mb-5 lg:mb-10 lg:px-5'>
        <h1 className='text-4xl font-bold'>{product.name}</h1>
        <p className='text-2xl font-semibold'>${product.price}</p>
        <p className='text-lg'>{product.description}</p>
        <p className='text-2xl font-semibold'>Features:</p>
        <p className='text-lg'>{product.features}</p>
        <p className='text-2xl font-semibold'>Stock:</p>
        <p className='text-lg'>{product.quantity}</p>
        <p className='text-2xl font-semibold'>Dimensions:</p>
        <p className='text-lg'> {`Width: ${width} cm, Height: ${height} cm, Depth: ${depth} cm`}</p>
        <h2 className='text-2xl font-bold mt-4'>Tags</h2>
        <p className='text-lg'>{product.tags}</p>
        {/* Button */}
        <button className="mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-customColors-dark-primary text-white font-bold hover:bg-customColors-border-dark hover:text-black transition-colors duration-300 rounded">
            <Link href="">Add to Cart</Link>
          </button>
      </div>
     </section>
    </main>
  );
};

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const productIds = await fetchProductIds();
  return productIds.map(id => ({
    productId: id.toString(),
  }));
}

export default ProductPage;
