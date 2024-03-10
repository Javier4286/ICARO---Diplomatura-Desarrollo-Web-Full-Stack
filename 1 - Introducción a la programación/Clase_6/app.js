const { list } = require("./functions/list");
const { find } = require("./functions/find");
const { edit } = require("./functions/edit");
const { deleteTitle } = require("./functions/delete");
const { add } = require("./functions/add");
const { returnTitle } = require("./functions/return");

console.log(list());
console.log(find("estudiar javascript"));
edit("hacer el asado", "algun dia");
console.log(deleteTitle("hacer el asado"));
add("nueva tarea", "nuevo valor");
console.log(returnTitle("hacer el asado"));
console.log(returnTitle("hacer El asado"));
