const { body, validationResult } = require("express-validator");

const validateCreateUserAccount = [
  body("Name")
    .notEmpty()
    .withMessage("You must enter the name")
    .isLength({ max: 30 })
    .withMessage("Name must not exceed 30 characters"),

  body("Surname")
    .notEmpty()
    .withMessage("You must enter the surname")
    .isLength({ max: 30 })
    .withMessage("Surname must not exceed 30 characters"),

  body("Email")
    .notEmpty()
    .withMessage("You must enter the email")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ max: 30 })
    .withMessage("Email must not exceed 30 characters"),

  body("Address")
    .notEmpty()
    .withMessage("You must enter the address")
    .isLength({ max: 30 })
    .withMessage("Address must not exceed 30 characters"),

  body("Password")
    .notEmpty()
    .withMessage("You must enter the password")
    .isLength({ max: 70 })
    .withMessage("Password must not exceed 70 characters"),

  body("Telephone")
    .notEmpty()
    .withMessage("You must enter the telephone")
    .isNumeric()
    .withMessage("Telephone must be numeric")
    .isLength({ max: 15 })
    .withMessage("Telephone must not exceed 15 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORS: errors.array() });
    }
    next();
  },
];

const validateUserLogin = [
  body("Email")
    .notEmpty()
    .withMessage("Please enter your email")
    .isEmail()
    .withMessage("Invalid email address"),
  body("Password").notEmpty().withMessage("Please enter your password"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORS: errors.array() });
    }
    next();
  },
];

module.exports = { validateCreateUserAccount, validateUserLogin };
