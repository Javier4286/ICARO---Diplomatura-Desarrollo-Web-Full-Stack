const fs = require("fs");

const readNoticiasServices = () => {
  const noticias = fs.readFileSync("noticias.json");
  return JSON.parse(noticias);
};

const saveNoticiasServices = (noticias) => {
  const noticiasString = JSON.stringify(noticias, null, 2);
  fs.writeFileSync("noticias.json", noticiasString, "utf-8");
};

module.exports = { readNoticiasServices, saveNoticiasServices };
