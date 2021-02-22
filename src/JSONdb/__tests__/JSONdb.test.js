const JSONdb = require("./../JSONdb");
const path = require("path");

const filePath = path.join(__dirname, "sample.data.json");

describe("Operation on JSONdb", () => {
  let db, Projects;
  beforeEach(() => {
    db = new JSONdb(filePath);
    Projects = db.doc("projects");
  });
  it("getAll method should return all docs in DB", () => {
    const expected = {
      1613920701987: {
        name: "dailyneed",
        path: "/Users/pankajl/coding/dailyneed",
        lastModifiedAt: 1613920701987,
        _id: "1613920701987",
      },
      1613920701988: {
        name: "dailyneed",
        path: "/Users/pankajl/coding/dailyneed",
        lastModifiedAt: 1613920701988,
        _id: "1613920701988",
      },
    };

    expect(Projects.getAll()).toMatchObject(expected);
  });

  it("getById method should return matching doc in DB", () => {
    const expected = {
      name: "dailyneed",
      path: "/Users/pankajl/coding/dailyneed",
      lastModifiedAt: 1613920701988,
      _id: "1613920701988",
    };
    expect(Projects.getById("1613920701988")).toMatchObject(expected);
  });

  it("getById method should return undefined is id does not match", () => {
    expect(Projects.getById("161392001988")).toBeUndefined();
  });
});
