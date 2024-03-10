const container = document.querySelector("#productos");

export const renderHtmlProducts = (array, btnText, event) => {
  array.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <h3>${element.title}</h3>
        <p>${element.price}</p>
        `;
    const button = document.createElement("button");
    button.setAttribute("id", `productId-${element.id}`);
    button.textContent = btnText;
    button.addEventListener("click", event);
    div.appendChild(button);
    container.appendChild(div);
  });
};
