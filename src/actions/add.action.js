const COMMANDS = require("../constants/commands");
const { getPathForCurrentDir } = require("./../helpers/helpers");
const { handleRequest } = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");
const { success, info, log } = require("../logging");

const { ADD_PROJECT_OPTION, NAME, PATH } = require("../translations/en");
const { SUCCESS_MSG, PROJECT_FOUND_MSG } = ADD_PROJECT_OPTION;

const add = async (filePath, cmdObj = {}) => {
  const { url } = cmdObj;

  try {
    const db = new JSONdb(filePath);
    const projects = db.doc("projects");

    const { name } = await handleRequest({
      command: url ? COMMANDS.ADD_WITH_URL : COMMANDS.ADD,
    });

    const path = url || getPathForCurrentDir();

    const input = {
      name,
      path,
      lastModifiedAt: new Date().getTime(),
    };

    const { name: projectName, path: projectPath } = projects.getByValue(
      "path",
      path
    );

    if (projectPath) {
      info("INFO", PROJECT_FOUND_MSG);
      log(`${NAME} : ${projectName}`);
      log(`${PATH} : ${projectPath} \n`);
    } else {
      projects.add(input);
      success("ADD", SUCCESS_MSG);
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = add;
