const {
  ADD_PROJECT_TITLE,
  ADD_PROJECT_TITLE_WITH_URL,
  REMOVE_PROJECT_TITLE,
  GO_PROJECT_TITLE,
  OPEN_PROJECT_TITLE,
} = require("../translations/en");

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

const removeProjectQuestion = ({ suggestions, data }) => {
  return [
    {
      type: "autocomplete",
      name: "value",
      suggest: suggestions,
      message: `${REMOVE_PROJECT_TITLE} :`,
      choices: data,
    },
  ];
};

const goProjectQuestion = ({ suggestions, data }) => {
  return [
    {
      type: "autocomplete",
      name: "value",
      suggest: suggestions,
      message: `${GO_PROJECT_TITLE} :`,
      choices: data,
    },
  ];
};

const openProjectQuestion = ({ suggestions, data }) => {
  return [
    {
      type: "autocomplete",
      name: "value",
      suggest: suggestions,
      message: `${OPEN_PROJECT_TITLE} :`,
      choices: data,
    },
  ];
};

module.exports = {
  goProjectQuestion,
  openProjectQuestion,
  removeProjectQuestion,
  addProjectQuestion,
  addProjectQuestionWithURL,
};
