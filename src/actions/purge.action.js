const COMMANDS = require("../constants/commands");
const {handleRequest} = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");

const { getProjectNames } = require("./../helpers/helpers");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const Projects = db.doc("projects");
    const { value } = await handleRequest(
      COMMANDS.PURGE,
      getProjectNames(Projects.getAll())
    );

    Projects.removeAll();
  } catch (e) {
    console.log(e);
  }
};

module.exports = go;
