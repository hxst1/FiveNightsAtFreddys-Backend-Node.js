const express = require("express");
const cors = require("cors");
const { getAllRobots, getRobot } = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", cors(), getAllRobots);
router.get("/:idRobot", cors(), getRobot);

module.exports = router;
