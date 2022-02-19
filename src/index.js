require("dotenv").config();
const debug = require("debug")("robots: root");
const chalk = require("chalk");

const initialServer = require("./server");
const conectMongoDB = require("./db");

const port = process.env.PORT || 4444;
const mongoDB = process.env.MONGO_SRING;

(async () => {
  try {
    await conectMongoDB(mongoDB);

    await initialServer(port);
  } catch (error) {
    debug(chalk.bgRed.black(`Error: ${error.message}`));
  }
})();
