const prompts = require("prompts");
const getQuestions = require("./getQuestions");

const handleRequest = async ({ command, data }) => {
  return prompts(getQuestions(command, data));
};

module.exports = {
  handleRequest,
};
