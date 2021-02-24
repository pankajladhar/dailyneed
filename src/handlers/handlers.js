const prompts = require("prompts");
const {
  getProjectNameFromPath,
  getSuggestions,
} = require("../helpers/helpers");
const {
  goProjectQuestion,
  openProjectQuestion,
  removeProjectQuestion,
  addProjectQuestion,
  addProjectQuestionWithURL,
} = require("./questions");


const questions = (command, data) => {
  let question = [];
  switch (command) {
    case "ADD":
      question = addProjectQuestion({ initialName: getProjectNameFromPath() });
      break;
    case "ADD_WITH_URL":
      question = addProjectQuestionWithURL({
        initialPath: getPathForCurrentDir(),
        initialName: getProjectNameFromPath(),
      });
      break;
    case "REMOVE":
      question = removeProjectQuestion({
        suggestions: getSuggestions(input, choices),
        data,
      });
      break;
    case "GO":
      question = goProjectQuestion({
        suggestions: getSuggestions(input, choices),
        data,
      });
      break;
    case "OPEN":
      question = openProjectQuestion({
        suggestions: getSuggestions(input, choices),
        data,
      });
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
