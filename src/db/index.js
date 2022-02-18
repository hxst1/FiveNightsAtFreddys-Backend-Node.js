const debug = require("debug")("robots: DataBase");
const chalk = require("chalk");
const mongoose = require("mongoose");

const conectMongoDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(chalk.bgRed(`Conection refused: ${error.message}`)));
        return;
      }
      debug(chalk.green(chalk.green("Connection Successful")));
      resolve();
    });
  });

module.exports = conectMongoDB;
