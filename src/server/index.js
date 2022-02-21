const debug = require("debug")("robots: Server");
const chalk = require("chalk");
const morgan = require("morgan");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const robotsRouter = require("./routers/ robotsRouter");
const useRouter = require("./routers/useRouter");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

const initialServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server port: ${port}`));
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = chalk.bgRed.black(
        `Couldn't start the server.${
          error.code === "EADDRINUSE" ? ` Port ${port} busy` : ""
        }`
      );
      reject(new Error(errorMessage));
    });
  });

app.use(morgan("dev"));
app.use(express.json());

app.use(helmet());

app.use("/login", useRouter);
app.use("/robots", cors(), robotsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = initialServer;
