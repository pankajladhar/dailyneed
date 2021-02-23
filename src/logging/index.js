const chalk = require("chalk");

const main = {
  info: "ℹ",
  success: "✔",
  warning: "⚠",
  error: "✖",
};

const success = (title, msg) => {
  console.log(
    `\n${chalk.green.inverse(` ${title} `)} ${chalk.italic.green.dim(msg)}\n`
  );
};

const info = (title, msg) => {
  console.log(
    `\n${chalk.yellow.inverse(` ${title} `)} ${chalk.italic.yellow(msg)}\n`
  );
};

const log = (msg) => {
  console.log(msg);
};

module.exports = {
  success,
  info,
  log
};
