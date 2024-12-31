const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=4');
  const data = await response.json();
  return data;
};

export default fetchProducts;
