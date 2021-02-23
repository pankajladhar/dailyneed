const getProjectNameFromPath = () => {
  return process.cwd().split("/").pop();
};

const getProjecPath = () => {
  return process.cwd();
};

const getPathForCurrentDir = () => process.cwd();

const generateUUID = () => {
  const uuid = new Date().getTime().toString();
  return uuid;
};

const getProjectNames = (input) => {
  return Object.values(input)
    .sort((a, b) => b.lastModifiedAt - a.lastModifiedAt)
    .map(({ name, _id }) => ({
      title: name,
      value: _id,
    }));
};

module.exports = {
  getProjecPath,
  getProjectNameFromPath,
  getPathForCurrentDir,
  generateUUID,
  getProjectNames,
};
