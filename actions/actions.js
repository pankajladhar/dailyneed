const path = require("path");
const add = require("./add.action");

const filePath = path.join(__dirname, "..", "data.json");

module.exports = {
  add: () => add(filePath),
};
