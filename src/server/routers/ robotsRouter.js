const express = require("express");
const cors = require("cors");
const {
  getAllRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();
const tokenValidator = require("../middlewares/tokenValidator");

router.get("/", cors(), getAllRobots);
router.get("/:idRobot", cors(), getRobot);
router.post("/factory", cors(), tokenValidator, createRobot);
router.put("/update", cors(), tokenValidator, updateRobot);
router.delete("/delete/:idRobot", cors(), tokenValidator, deleteRobot);

module.exports = router;
