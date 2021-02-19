const { spawn, execSync } = require("child_process");

const COMMANDS = require("../constants/commands");
const handleRequest = require("../handlers/handlers");
const JSONdb = require("../JSONdb/JSONdb");

const { getProjectNames } = require("./../helpers/helpers");

const go = async (filePath) => {
  try {
    const db = new JSONdb(filePath);
    const Projects = db.model("projects");
    const { value } = await handleRequest(
      COMMANDS.GO,
      getProjectNames(Projects.find({}))
    );

    const projectPath = Projects.findById(value).path;
    spawn(process.env.SHELL, {
      cwd: projectPath,
      // This makes this process "take over" the terminal
      stdio: "inherit",
      env: { ...process.env },
    });
    execSync(`code ${projectPath}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = go;
