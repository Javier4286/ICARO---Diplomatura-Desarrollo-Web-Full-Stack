const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5000 },
  })
);

app.use("/", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Working at http://localhost:3000 port:${PORT}`);
});
