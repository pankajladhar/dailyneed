const { spawn } = require("child_process");
const { log } = require("util");

const COMMANDS = require("../constants/commands");
const {handleRequest} = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");

const { getProjectNames } = require("./../helpers/helpers");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const Projects = db.doc("projects");
    const { value } = await handleRequest(
      COMMANDS.REMOVE,
      getProjectNames(Projects.getAll())
    );

    Projects.remove(value);
  } catch (e) {
    console.log(e);
  }
};

module.exports = go;
