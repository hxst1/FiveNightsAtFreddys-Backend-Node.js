const express = require("express");
const { getAllRobots, getRobot } = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/all", getAllRobots);
router.get("/robot/:id", getRobot);

module.exports = router;
