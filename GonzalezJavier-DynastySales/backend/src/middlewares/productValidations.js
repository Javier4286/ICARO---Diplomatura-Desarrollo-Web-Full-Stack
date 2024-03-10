const { body, validationResult } = require("express-validator");

const validateProductAddAndUpdate = [
  body("Artist")
    .notEmpty()
    .withMessage("You must enter the artist.")
    .isLength({ max: 30 })
    .withMessage("Artist must not exceed 30 characters."),
  body("Album")
    .notEmpty()
    .withMessage("You must enter the album name.")
    .isLength({ max: 50 })
    .withMessage("Album name must not exceed 50 characters."),
  body("Year")
    .notEmpty()
    .withMessage("You must enter the year.")
    .isInt({ min: 1, max: 9999 })
    .withMessage("Year must be a positive 4-digit number."),
  body("Price")
    .notEmpty()
    .withMessage("You must enter a valid price.")
    .custom((value) => parseFloat(value) > 0)
    .withMessage("Price must be greater than 0."),
  body("Categorie")
    .notEmpty()
    .withMessage("You must enter the category.")
    .isLength({ max: 50 })
    .withMessage("Category must not exceed 50 characters."),
  body("Url")
    .notEmpty()
    .withMessage("You must enter the URL.")
    .isURL()
    .withMessage("Invalid URL format.")
    .isLength({ max: 100 })
    .withMessage("URL must not exceed 100 characters."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORS: errors.array() });
    }
    next();
  },
];

module.exports = { validateProductAddAndUpdate };
