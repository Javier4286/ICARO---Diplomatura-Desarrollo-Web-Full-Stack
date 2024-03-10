const { body, validationResult } = require("express-validator");

const validateAddedProducts = [
  body("Artist").notEmpty().withMessage("Debes ingresar un artista"),
  body("Album").notEmpty().withMessage("Debes ingresar el nombre"),
  body("Year").notEmpty().withMessage("Debes ingresar el año"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

const validateUpdatedProducts = [
  body("Artist").notEmpty().withMessage("Debes ingresar un artista"),
  body("Album").notEmpty().withMessage("Debes ingresar el nombre"),
  body("Year").notEmpty().withMessage("Debes ingresar el año"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

module.exports = { validateAddedProducts, validateUpdatedProducts };
