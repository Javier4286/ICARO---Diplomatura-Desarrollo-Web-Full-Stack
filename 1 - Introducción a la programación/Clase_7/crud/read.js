const fs = require("fs");
function read() {
  const data = fs.readFileSync("./data.json", "utf-8");
  const dataParsed = JSON.parse(data);
  return dataParsed;
}
module.exports = { read };
