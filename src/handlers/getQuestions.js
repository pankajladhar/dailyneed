const {
  getProjectNameFromPath,
  getSuggestions,
  getPathForCurrentDir,
} = require("../helpers/helpers");
const {
  goProjectQuestion,
  openProjectQuestion,
  removeProjectQuestion,
  addProjectQuestion,
  addProjectQuestionWithURL,
} = require("./questions");

const getQuestions = (command, data) => {
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
        suggestions: getSuggestions,
        data,
      });
      break;
    case "GO":
      question = goProjectQuestion({
        suggestions: getSuggestions,
        data,
      });
      break;
    case "OPEN":
      question = openProjectQuestion({
        suggestions: getSuggestions,
        data,
      });
      break;
    // case "PURGE":
    //   question = [
    //     {
    //       type: "confirm",
    //       name: "value",
    //       message: "Can you confirm?",
    //       initial: true,
    //     },
    //   ];
    // default:
    //   break;
  }
  return question;
};

module.exports = getQuestions;
