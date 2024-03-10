const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("email").notEmpty().withMessage("Debes completar el campo email").bail(),
  body("password")
    .notEmpty()
    .withMessage("Debes completar el campo contraseña"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.array() });
    }
    next();
  },
];

module.exports = validateRegister;
