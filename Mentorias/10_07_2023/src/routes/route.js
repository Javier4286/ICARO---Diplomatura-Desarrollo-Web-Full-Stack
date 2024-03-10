const express = require("express");
const routeController = require("../controllers/routeController");
const noticiasValidator = require("../../middleware/noticiasValidator");
const router = express.Router();

router.post("/", noticiasValidator, routeController);

module.exports = router;
