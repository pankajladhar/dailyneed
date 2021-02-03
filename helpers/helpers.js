const getProjectNameFromPath = () => {
  return process.cwd().split("/").pop();
};

const getPathForCurrentDir = () => process.cwd();

const generateUUID = () => {
  const uuid = new Date().getTime().toString();
  return uuid;
};

const getProjectNames = (input) => {
  return Object.values(input).map(({ name }) => ({
    title: name,
  }));
};

module.exports = {
  getProjectNameFromPath,
  getPathForCurrentDir,
  generateUUID,
  getProjectNames,
};
