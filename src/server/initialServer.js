const debug = require("debug")("robots: Server: initialServer");
const chalk = require("chalk");

const initialServer = (app, port) =>
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

module.exports = initialServer;
