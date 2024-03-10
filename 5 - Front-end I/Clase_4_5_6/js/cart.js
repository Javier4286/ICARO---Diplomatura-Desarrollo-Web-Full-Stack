// HACER UN FETCH DE LA API DE PRODUCTOS

// OBTENER LOS PRODUCTOS GUARDADOS EN LOCALSTORAGE

// MOSTRAR LOS PRODUCTOS EN EL CARRITO, OBTENIENDO LA INFORMACIÓN DEL FETCH -->

import { fetchApi } from "./utils/fetch.js";
import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

const renderCarrito = async () => {
  const storage = getLocalStorage("products") || [];
  const productos = await fetchApi();
  const cartProducts = productos.filter((product) => {
    return storage.includes(product.id.toString());
  });
  const container = document.querySelector("#productos");
  cartProducts.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h3>${element.title}</h3>
    <p>${element.price}</p>
    `;
    const button = document.createElement("button");
    button.setAttribute("id", `productId-${element.id}`);
    button.textContent = "Quitar del Carrito";
    button.addEventListener("click", deleteEvent);
    div.appendChild(button);
    container.appendChild(div);
  });
};

const deleteEvent = (event) => {
  const nodo = event.target.parentNode;
  nodo.remove();
  const id = event.target.id.split("-")[1];
  const storage = getLocalStorage("products") || [];
  const filtered = storage.filter((product) => product !== id);
  saveLocalStorage("products", filtered);
};

renderCarrito();
