const path = require("path");
const add = require("./add.action");
const go = require("./go.action");
const open = require("./open.action");

const filePath = path.join(__dirname, "..", "data.json");

module.exports = {
  add: () => add(filePath),
  go: () => go(filePath),
  open: () => open(filePath),
};
