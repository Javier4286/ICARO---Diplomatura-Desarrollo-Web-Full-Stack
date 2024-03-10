const title = document.querySelector(".titulo");
const subtitle = document.querySelector(".subtitulo");

title.innerHTML = "algo 1";
title.style.backgroundColor = "red";

title.classList.add("title");

const ul = document.querySelector("ul");
const liSecondElement = ul.children[1];
liSecondElement.classList.add("li");

console.log(title);
console.log(subtitle);
