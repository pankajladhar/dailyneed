const { ADD_PROJECT_TITLE, ADD_PROJECT_TITLE_WITH_URL } = require("../translations/en");

const addProjectQuestion = ({ initialName }) => {
  return [
    {
      name: "name",
      type: "text",
      message: `${ADD_PROJECT_TITLE} :`,
      initial: initialName,
    },
  ];
};

const addProjectQuestionWithURL = ({ initialPath, initialName }) => {
  return [
    {
      name: "url",
      type: "text",
      message: `${ADD_PROJECT_TITLE_WITH_URL} :`,
      initial: initialPath,
    },
    {
      name: "name",
      type: "text",
      message: `${ADD_PROJECT_TITLE} :`,
      initial: initialName,
    },
  ];
};

module.exports = {
  addProjectQuestion,
  addProjectQuestionWithURL,
};
