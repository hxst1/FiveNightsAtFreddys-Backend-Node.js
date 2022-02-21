const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../db/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    const error = new Error("User not found");
    error.code = 401;
    return next(error);
  }
  const rightPassword = await bcrypt.compare(password, user.password);
  if (!rightPassword) {
    const error = new Error("Password not found");
    error.code = 401;
    return next(error);
  }
  const userdata = { name: user.username, id: user.id };
  const token = jwt.sign(userdata, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
  return res.json({ token });
};

module.exports = loginUser;
