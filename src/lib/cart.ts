// lib/api.ts
import client from '@sanity/client';

export const fetchCartItems = async () => {
  const query = `*[_type == "cartItem"]{
    _id,
    name,
    description,
    price,
    quantity,
    "image": image.asset->url
  }`;

  const items = await client.fetch (query);
  return items.map((item: { _id: any; name: any; description: any; price: any; quantity: any; image: any; }) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  }));
};
