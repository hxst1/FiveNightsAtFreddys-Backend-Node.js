const tokenValidator = (req, res, next) => {
  const { token } = req.query;
  if (token === process.env.TOKEN) {
    next();
    return;
  }
  res.status(401).json({ error: "unauthorized" });
};

module.exports = tokenValidator;
