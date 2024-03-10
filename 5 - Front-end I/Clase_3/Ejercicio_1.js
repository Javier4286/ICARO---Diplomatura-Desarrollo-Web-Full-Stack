const form = document.querySelector("#form");

const products = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formProducts = new FormData(form);
  const productObjet = Object.fromEntries(formProducts);
  if (productObjet.price <= 0) {
    alert("The price entered must be greater than 0");
    form - reset();
    return;
  }
  if (productObjet.name.length < 7) {
    alert("Product name must contain at least 7 characters");
    form.name.classList.add("error-input");
    form.reset();
    return;
  }
  form.name.classList.remove("error-input");
  products.push(productObjet);
  form.reset();
  renderedProducts();
  console.log(products);
});

function renderedProducts() {
  const productSection = document.querySelector("#products");
  productSection.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `Product name: ${product.name}, Price: ${product.price}`;
    productSection.appendChild(li);
  });
}
