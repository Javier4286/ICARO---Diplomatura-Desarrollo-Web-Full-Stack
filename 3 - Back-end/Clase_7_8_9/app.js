const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "123456",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 6000 },
  })
);

app.use("/", require("./routes/indexRoutes"));
app.use("/admin", require("./routes/indexAdmin"));
// app.use("/api/usuarios");

app.listen(port, () => {
  console.log(`Working at http://localhost:3000 port:${port}`);
});

//DIPLOWEB0223 - Julio 4 - Clase 29.mp4: 59:55 - 2:05:41
