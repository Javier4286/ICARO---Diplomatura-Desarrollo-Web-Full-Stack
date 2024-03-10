const form = document.querySelector("#form");
const users = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  users.push(data);
  form.reset();
  renderUsers();
});

function renderUsers() {
  const usersSection = document.querySelector("#usuarios");
  usersSection.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `Nombre: ${user.Nombre}\nApellido: ${user.Apellido}`;
    li.style.whiteSpace = "pre-line";
    usersSection.appendChild(li);
  });
}

// Clase 40.mp4 = 1:28:25(1:33:35)
