const { spawn } = require("child_process");

const COMMANDS = require("../constants/commands");
const { handleRequest } = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");
const { warn } = require("../logging");

const { getProjectNames } = require("./../helpers/helpers");

const {
  REMOVE_PROJECT_SUCCESS_MSG,
  PROJECT_NOT_FOUND_TITLE,
} = require("../translations/en");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const instance = db.doc("projects");

    const docs = instance.getAll();
    if (Object.keys(docs).length === 0) {
      warn("WARN", PROJECT_NOT_FOUND_TITLE);
      process.exit(1);
    }

    const { value } = await handleRequest({
      command: COMMANDS.GO,
      data: getProjectNames(docs),
    });

    const { _id, path: projectPath } = instance.getById(value);
    instance.update(_id, { lastModifiedAt: new Date().getTime() });

    spawn(process.env.SHELL, {
      cwd: projectPath,
      stdio: "inherit",
      env: { ...process.env },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = go;
