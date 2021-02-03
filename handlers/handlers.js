const prompts = require("prompts");
const { getProjectNameFromPath } = require("../helpers/helpers");

const questions = (command, data) => {
  let xyz = [];
  switch (command) {
    case "ADD":
      xyz = [
        {
          name: "name",
          type: "text",
          message: "Project name:",
          initial: getProjectNameFromPath(),
        },
      ];
      break;
    default:
      break;
  }
  return xyz;
};

const handleRequest = async (command, data) => {
  return prompts(questions(command, data));
};

module.exports = handleRequest;
