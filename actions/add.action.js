
const COMMANDS = require("../constants/commands");
const handleRequest = require("../handlers/handlers");

const add = async (filePath) => {
  try {
    const { name } = await handleRequest(COMMANDS.ADD);
    console.log(name)
  } catch (e) {
    console.error(e)
  }
};

module.exports = add;
