const COMMANDS = require("../constants/commands");
const { handleRequest } = require("../handlers/handlers");
const { success } = require("../logging");

const { REMOVE_PROJECT_SUCCESS_MSG } = require("../translations/en");

const JSONdb = require("../JSONdb/JSONdb");

const { getProjectNames } = require("./../helpers/helpers");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const instance = db.doc("projects");
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
