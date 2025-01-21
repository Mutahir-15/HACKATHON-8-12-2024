import { createClient } from '@sanity/client';

// Initialize the client properly
const client = createClient({
  projectId: 'NEXT_PUBLIC_SANITY_PROJECT_ID',
  dataset: 'production', 
  apiVersion: '2023-05-03', 
  useCdn: true
});

export const fetchCartItems = async () => {
  const query = `*[_type == "cartItem"]{
    _id,
    name,
    description,
    price,
    quantity,
    "image": image.asset->url
  }`;

  const items = await client.fetch(query);
  return items.map((item: { _id: any; name: any; description: any; price: any; quantity: any; image: any; }) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }));
};