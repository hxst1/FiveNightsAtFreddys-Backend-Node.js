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
router.post("/create", tokenValidator, createRobot);
router.put("/update", tokenValidator, updateRobot);
router.delete("/delete/:idRobot", tokenValidator, deleteRobot);

module.exports = router;
