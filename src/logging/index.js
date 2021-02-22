const chalk = require("chalk");

const main = {
  info: "ℹ",
  success: "✔",
  warning: "⚠",
  error: "✖",
};

const success = (title, msg) => {
  console.log(
    `\n${chalk.green.inverse(` ${title} `)} ${chalk.italic.dim(msg)}\n`
  );
};

module.exports = {
  success,
};
