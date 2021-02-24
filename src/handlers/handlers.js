const prompts = require("prompts");
const getQuestions = require("./getQuestions");
const { onCancel } = require("./../helpers/helpers");

const handleRequest = async ({ command, data }) => {
  return prompts(getQuestions(command, data), { onCancel });
};

module.exports = {
  handleRequest,
};
