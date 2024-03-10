const students = [
  {
    id: 1,
    name: "Javier",
    surname: "Gonzalez",
  },
  {
    id: 2,
    name: "Antonia",
    surname: "Romero",
  },
  {
    id: 3,
    name: "Felipe",
    surname: "Gonzalez",
  },
];

let div = document.querySelector("div");

let ul = document.createElement("ul");

let renderStudents = students.forEach((student) => {
  let li = document.createElement("li");
  li.textContent = student.name;
  ul.appendChild(li);
});

div.appendChild(ul);
