const prompts = require("prompts");
const { getProjectNameFromPath, getProjecPath } = require("../helpers/helpers");
const { addProjectQuestion, addProjectQuestionWithURL } = require("./questions");
const getSuggestions = (input, choices) =>
  choices.filter((i) => i.title.toLowerCase().includes(input.toLowerCase()));

const questions = (command, data) => {
  let question = [];
  switch (command) {
    case "ADD":
      question = addProjectQuestion({ initialName: getProjectNameFromPath() });
      break;
    case "ADD_WITH_URL":
      question = addProjectQuestionWithURL({
        initialPath: getProjecPath(),
        initialName: getProjectNameFromPath(),
      });
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

const handleRequest = async ({ command, data }) => {
  console.log(command);
  return prompts(questions(command, data));
};

module.exports = handleRequest;
