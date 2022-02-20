const { model, Schema } = require("mongoose");
require("mongoose-type-url");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  date: {
    type: Number,
    required: true,
  },
  endurace: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
