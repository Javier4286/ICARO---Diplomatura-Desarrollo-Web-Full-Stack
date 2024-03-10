export async function fetchApi() {
  const productos = await fetch("https://fakestoreapi.com/products");
  return await productos.json();
}
