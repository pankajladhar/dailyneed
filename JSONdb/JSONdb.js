const fs = require("fs");
const { generateUUID } = require("./../helpers/helpers");

class operations {
  constructor(filePath) {
    this.filePath = filePath;
    this.storage = JSON.parse(fs.readFileSync(filePath));
  }
  find(tblName) {
    const storage = this.storage[tblName];
    return (key) => {
      if (!key) {
        return storage;
      }
      return storage.hasOwnProperty(key) ? storage[key] : undefined;
    };
  }
  save(tblName) {
    const storage = this.storage[tblName];
    const uuid = generateUUID();
    return (val) => {
      storage[uuid] = {
        _id: uuid,
        ...val,
      };
      const data = {
        ...this.storage,
        [tblName]: storage,
      };
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    };
  }
}

class JSONdb extends operations {
  constructor(filePath) {
    super(filePath);
  }

  model(tblName) {
    return {
      find: this.find(tblName),
      save: this.save(tblName),
    };
  }
}

module.exports = JSONdb;

// const projects = db.modal('projects')
// projects.save({})
