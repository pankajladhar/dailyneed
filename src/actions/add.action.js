const COMMANDS = require("../constants/commands");
const { getPathForCurrentDir } = require("./../helpers/helpers");
const handleRequest = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");
const { success } = require("../logging");

const { ADD_PROJECT_OPTION } = require("../translations/en");
const { SUCCESS_MSG } = ADD_PROJECT_OPTION;

const add = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const { name } = await handleRequest(COMMANDS.ADD);

    const input = {
      name,
      path: getPathForCurrentDir(),
      lastModifiedAt: new Date().getTime(),
    };
    const Projects = db.doc("projects");
    Projects.add(input);
    success("ADD", SUCCESS_MSG);
  } catch (e) {
    console.error(e);
  }
};

module.exports = add;
