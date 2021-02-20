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
      if (!Object.keys(key).length) {
        return storage;
      }
      return storage.hasOwnProperty(key) ? storage[key] : undefined;
    };
  }
  findById(tblName) {
    const storage = this.storage[tblName];
    return (key) => {
      return storage.hasOwnProperty(key) ? storage[key] : undefined;
    };
  }

  write(tblName, { id, value }) {
    const storage = this.storage[tblName];
    storage[id] = value;
    const data = {
      ...this.storage,
      [tblName]: storage,
    };
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  update(tblName) {
    return (id, val) => {
      const oldSnap = this.findById(tblName)(id);
      const newSnap = {
        ...oldSnap,
        ...val,
      };
      this.write(tblName, { id: oldSnap._id, value: newSnap });
    };
  }

  save(tblName) {
    const id = generateUUID();
    return (value) => {
      this.write(tblName, {
        id,
        value: {
          ...value,
          _id: id,
        },
      });
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
      findById: this.findById(tblName),
      save: this.save(tblName),
      update: this.update(tblName),
    };
  }
}

module.exports = JSONdb;

// const projects = db.modal('projects')
// projects.save({})
