const prompts = require("prompts");
const { getProjectNameFromPath } = require("../helpers/helpers");
const { ADD_PROJECT_OPTION } = require("../translations/en");

const { TITLE } = ADD_PROJECT_OPTION;

const getSuggestions = (input, choices) =>
  choices.filter((i) => i.title.toLowerCase().includes(input.toLowerCase()));

const questions = (command, data) => {
  let question = [];
  switch (command) {
    case "ADD":
      question = [
        {
          name: "name",
          type: "text",
          message: `${TITLE} :`,
          initial: getProjectNameFromPath(),
        },
      ];
      break;
    case "GO":
    case "OPEN":
    case "REMOVE":
      question = [
        {
          type: "autocomplete",
          name: "value",
          suggest: getSuggestions,
          message: "Select project to open :",
          choices: data,
        },
      ];
      break;
    case "PURGE":
      question = [
        {
          type: "confirm",
          name: "value",
          message: "Can you confirm?",
          initial: true,
        },
      ];
    default:
      break;
  }
  return question;
};

const handleRequest = async (command, data) => {
  return prompts(questions(command, data));
};

module.exports = handleRequest;
