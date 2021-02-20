const COMMANDS = require("../constants/commands");
const { getPathForCurrentDir } = require("./../helpers/helpers");
const handleRequest = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");

const add = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const { name } = await handleRequest(COMMANDS.ADD);

    const input = {
      name,
      path: getPathForCurrentDir(),
      lastModifiedAt: new Date().getTime()
    };
    const Projects = db.doc("projects");
    Projects.add(input);
  } catch (e) {
    console.error(e);
  }
};

module.exports = add;
