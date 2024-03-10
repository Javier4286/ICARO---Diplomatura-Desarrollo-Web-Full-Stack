const express = require("express");
const { adminControllers } = require("../controllers/adminControllers");
const router = express();

router.get("/profile", adminControllers);

module.exports = router;
