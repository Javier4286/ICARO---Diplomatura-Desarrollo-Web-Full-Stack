const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio."),
  body("precio").notEmpty().withMessage("El precio debe ser obligatorio."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateProduct;
