const COMMANDS = require("../constants/commands");
const { handleRequest } = require("../handlers/handlers");
const { success, warn } = require("../logging");
const JSONdb = require("../JSONdb/JSONdb");

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
      command: COMMANDS.REMOVE,
      data: getProjectNames(instance.getAll()),
    });

    instance.remove(value);
    success("REMOVE", REMOVE_PROJECT_SUCCESS_MSG);
  } catch (e) {
    console.log(e);
  }
};

module.exports = go;
