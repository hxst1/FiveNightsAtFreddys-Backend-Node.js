const express = require("express");
const loginUser = require("../controllers/userControllers");

const router = express.Router();

router.post("/create", loginUser);

module.exports = router;
