const fs = require("fs");

const readUsuarios = () => {
  try {
    const usuarios = fs.readFileSync("usuarios.json", "utf-8");
    return JSON.parse(usuarios);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        "El archivo usuarios.json no se encontró eb eka ubicación especifica"
      );
    } else {
      console.log("Error al leer el archivo usuarios.json", error.message);
    }
    return null;
  }
};

const writeUsuarios = (param) => {
  fs.writeFileSync("usuarios.json", JSON.stringify(param, null, 2));
};

module.exports = { readUsuarios, writeUsuarios };
