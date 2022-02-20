const express = require("express");

const {
  getAllRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();
const tokenValidator = require("../middlewares/tokenValidator");

router.get("/", getAllRobots);
router.get("/:idRobot", getRobot);
router.post("/factory", tokenValidator, createRobot);
router.put("/update", tokenValidator, updateRobot);
router.delete("/delete/:idRobot", tokenValidator, deleteRobot);

module.exports = router;
