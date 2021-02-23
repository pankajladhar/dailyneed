const { getProjectNameFromPath } = require("../helpers/helpers");
const { ADD_PROJECT_OPTION } = require("../translations/en");

const { TITLE, TITLE_WITH_URL } = ADD_PROJECT_OPTION;

const addQuestion = ({ initialName }) => {
  return [
    {
      name: "name",
      type: "text",
      message: `${TITLE} :`,
      initial: initialName,
    },
  ];
};

const addQuestionWithURL = ({ initialPath, initialName }) => {
  return [
    {
      name: "url",
      type: "text",
      message: `${TITLE_WITH_URL} :`,
      initial: initialPath,
    },
    {
      name: "name",
      type: "text",
      message: `${TITLE} :`,
      initial: initialName,
    },
  ];
};

module.exports = {
  addQuestion,
  addQuestionWithURL,
};
