const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use("/", require("./src/routes/route"));

app.listen(port, () => {
  console.log(`Working at: http://localhost:3000 port:${port}`);
});
