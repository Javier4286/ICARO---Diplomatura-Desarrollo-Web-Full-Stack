let grandfather = document.querySelector("#grandfatherMessages");
let father = document.querySelector("#fatherMessages");
let grandson = document.querySelector("#grandsonMessages");

grandfather.addEventListener("click", () => {
  console.log("grandfather message");
});

father.addEventListener("click", (event) => {
  event.stopPropagation();

  console.log("father message");
});

grandson.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("grandson message");
});
