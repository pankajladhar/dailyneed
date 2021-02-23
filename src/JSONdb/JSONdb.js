const fs = require("fs");
const { generateUUID } = require("./../helpers/helpers");

class operations {
  constructor(filePath) {
    this.filePath = filePath;
    this.storage = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  getAll(tblName) {
    return () => {
      return this.storage[tblName];
    };
  }

  getById(tblName) {
    const storage = this.storage[tblName];
    return (key) => {
      return storage.hasOwnProperty(key) ? storage[key] : undefined;
    };
  }

  getByValue(tblName) {
    const storage = this.storage[tblName];
    return (key, value) => {
      return Object.values(storage).filter((s) => s[key] === value)[0] || {};
    };
  }

  write({ tblName, data }) {
    const payload = {
      ...this.storage,
      [tblName]: data,
    };
    fs.writeFileSync(this.filePath, JSON.stringify(payload, null, 2));
  }

  buildPayload(tblName, type, { id, value }) {
    const storage = this.storage[tblName];
    let payload;
    switch (type) {
      case "ADD":
        const _id = generateUUID();
        storage[_id] = {
          ...value,
          _id,
        };
        payload = storage;
        break;

      case "UPDATE":
        const oldSnap = this.getById(tblName)(id);
        const updatedValue = {
          ...oldSnap,
          ...value,
        };
        storage[id] = updatedValue;
        payload = storage;
        break;

      case "REMOVE":
        delete storage[id];
        payload = storage;
        break;

      case "PURGE":
        payload = {};
        break;

      default:
        break;
    }
    return payload;
  }

  add(tblName) {
    return (value) => {
      this.write({
        tblName,
        data: this.buildPayload(tblName, "ADD", { value }),
      });
    };
  }

  update(tblName) {
    return (id, value) => {
      this.write({
        tblName,
        data: this.buildPayload(tblName, "UPDATE", { id, value }),
      });
    };
  }

  remove(tblName) {
    return (id) => {
      this.write({
        tblName,
        data: this.buildPayload(tblName, "REMOVE", { id }),
      });
    };
  }

  removeAll(tblName) {
    return () => {
      this.write({
        tblName,
        data: this.buildPayload(tblName, "PURGE", {}),
      });
    };
  }
}

class JSONdb extends operations {
  constructor(filePath) {
    super(filePath);
  }

  doc(tblName) {
    return {
      getAll: this.getAll(tblName),
      getById: this.getById(tblName),
      getByValue: this.getByValue(tblName),
      add: this.add(tblName),
      update: this.update(tblName),
      remove: this.remove(tblName),
      removeAll: this.removeAll(tblName),
    };
  }
}

module.exports = JSONdb;
