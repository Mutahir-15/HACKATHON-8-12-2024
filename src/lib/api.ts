import { client } from "@/sanity/lib/client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
    tags: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    brand: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    weight: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    color: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    material: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    image: string | StaticImport;
    features: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    dimensions: string;
    image_url: string;
  }
  
  export async function fetchProductIds(): Promise<string[]> {
    const products: Product[] = await client.fetch(`
      *[_type == "product"] {
        _id
      }
    `);
    return products.map(product => product._id);
  }
  
  export async function fetchProductById(id: string): Promise<Product> {
    const product: Product = await client.fetch(`
      *[_type == "product" && _id == $id] {
        _id,
        name,
        description,
        quantity,
        price,
        dimensions,
        tags,
        features,
        "image_url": image.asset->url,
      }[0]
    `, { id });
    return product;
  }
  