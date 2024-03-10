const { body, validationResult } = require("express-validator");

const noticiasValidator = [
  body("titulo")
    .isString()
    .isLength({ max: 10 })
    .withMessage("Debe ser un string con un maximo de 10 caracteres"),
  body("img").isURL(),
  body("noticia").isString().isLength({ max: 100 }),
  body("resumen").isString().isLength({ max: 150 }),
  body("categoria").isIn(["economia", "tecnologia", "policiales"]),
  body("autor").isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array);
      return;
    }
    next();
  },
];

module.exports = noticiasValidator;
