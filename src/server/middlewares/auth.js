const jwt = require("jsonwebtoken");
const chalk = require("chalk");

const auth = (req, res, next) => {
  const headerAuth = req.header("Authorization");
  if (!headerAuth) {
    const error = new Error(chalk.red("Token missing"));
    error.code = 401;
    next(error);
  } else {
    const token = headerAuth.replace("Bearer ", "");
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      error.code = 401;
      next(error);
    }
  }
};

module.exports = { auth };
