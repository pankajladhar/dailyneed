const path = require("path");
const add = require("./add.action");
const go = require("./go.action");
const open = require("./open.action");
const remove = require("./remove.action");
const purge = require("./purge.action");

const filePath = path.join(__dirname, "..", "data.json");

module.exports = {
  add: (cmdObj) => add(filePath, cmdObj),
  go: () => go(filePath),
  open: () => open(filePath),
  remove: () => remove(filePath),
  purge: () => purge(filePath),
};
