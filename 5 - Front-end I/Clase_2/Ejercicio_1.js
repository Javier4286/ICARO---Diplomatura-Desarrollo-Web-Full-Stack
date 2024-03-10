let article = document.querySelector("#articulo");

let button = article.querySelector("button");

let price = article.querySelector("p").textContent;

button.addEventListener("mouseover", () => {
  alert(`Precio: ${price}`);
});