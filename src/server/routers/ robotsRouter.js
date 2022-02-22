const express = require("express");

const {
  getAllRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot,
} = require("../controllers/robotsControllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, getAllRobots);
router.get("/:idRobot", getRobot);
router.post("/factory", auth, createRobot);
router.put("/:idRobot", auth, updateRobot);
router.delete("/:idRobot", auth, deleteRobot);

module.exports = router;
