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
    case "GO":
      xyz = [
        {
          type: "autocomplete",
          name: "value",
          suggest: (input, choices) =>
            choices.filter((i) =>
              i.title.toLowerCase().includes(input.toLowerCase())
            ),
          message: "Select project to open :",
          choices: data,
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
