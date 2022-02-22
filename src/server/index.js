const morgan = require("morgan");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const robotsRouter = require("./routers/ robotsRouter");
const useRouter = require("./routers/useRouter");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(helmet());

app.use("/login", useRouter);
app.use("/robots", cors(), robotsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
