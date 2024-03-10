const express = require("express");
const { renderIndex, renderAbout } = require("../controllers/indexControllers");
const router = express.Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);

module.exports = router;
