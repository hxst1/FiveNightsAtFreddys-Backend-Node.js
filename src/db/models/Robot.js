const { default: mongoose } = require("mongoose");
const { model, Schema } = require("mongoose");
require("mongoose-type-url");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  date: {
    type: Date,
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
