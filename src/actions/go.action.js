const { spawn } = require("child_process");

const COMMANDS = require("../constants/commands");
const {handleRequest} = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");

const { getProjectNames } = require("./../helpers/helpers");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const Projects = db.doc("projects");
    const { value } = await handleRequest(
      COMMANDS.GO,
      getProjectNames(Projects.getAll())
    );

    const { _id, path: projectPath } = Projects.getById(value);
    Projects.update(_id, { lastModifiedAt: new Date().getTime() });

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
