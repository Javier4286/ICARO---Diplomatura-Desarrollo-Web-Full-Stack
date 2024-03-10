const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/usuario/javier", (req, res) => {
  res.render("usuario", { usuario: "Javier" });
});

const myMiddleware = (req, res, next) => {
  console.log("Middleware ejecutado");
  next();
};

app.use(myMiddleware);
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "my-secret",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 300000 },
  })
);
app.use("/usuarios", require("./routes/usuarioRoutes"));

app.listen(port, () => {
  console.log(`Working at http://localhost:3000 port:${port}`);
});
