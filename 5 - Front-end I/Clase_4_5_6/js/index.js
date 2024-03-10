// # Ejercicio fetch y html

// Objetivos: poner en práctica los métodos de fetch para hacer solicitudes y modificar el html con javascript.

// - Trae los datos de `https://fakestoreapi.com` con un método GET
// - Guarda eso en un array dentro de tu archivo javascript
// - Renderiza en el html los productos almacenados en el array anterior, luego de que el fetch fue exitoso.

// - Renderiza en el html los productos luego de que el fetch fue exitoso.
// - Agregar un botón para `guardar en el carrito` a cada producto
// - Almacenar en `LocalStorage` los productos guardados

import { renderHtmlProducts } from "./html.js";
import { fetchApi } from "./utils/fetch.js";
import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

// const db = [];

// async function getData() {
//   const productos = await fetchApi();
//   db.push(...productos);
//   console.log(db[0]);
// }

async function renderProducts() {
  const allProducts = await fetchApi();
  const db = getLocalStorage("db") || [];
  const totalProducts = [...db, ...allProducts];
  renderHtmlProducts(totalProducts, "Guardar", saveProduct);
}

// getData();
renderProducts();

const saveProduct = (event) => {
  const idAttributes = event.target.id.split("-");
  const id = idAttributes[1];
  const storage = getLocalStorage("products") || [];
  const index = storage.find((item) => item === id);
  if (!index) {
    storage.push(id);
  }
  saveLocalStorage("products", storage);
};
