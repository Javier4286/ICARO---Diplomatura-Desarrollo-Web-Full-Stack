const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mi-secreto",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 },
  })
);

app.set("view engine", "ejs");

app.use("/", require("./routes/indexRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});

//DIPLOWEB0223 - Junio 27 - Clase 27.mp4: 0:00 - 1:41:45
