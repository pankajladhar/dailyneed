const fs = require("fs");
const path = require("path");

const JSONdb = require("./../JSONdb");
const { getDBSnapshot } = require("../fixtures/fixtures");

jest.spyOn(fs, "readFileSync");

describe("Operation on JSONdb", () => {
  let db, projects;

  beforeEach(() => {
    fs.readFileSync.mockImplementation(getDBSnapshot);
    db = new JSONdb("/some/fake/path");
    projects = db.doc("projects");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("getAll method should return all docs in DB", () => {
    const expected = {
      1613920701987: {
        name: "coding",
        path: "/Users/pankajl/coding",
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

    expect(projects.getAll()).toMatchObject(expected);
  });

  it("getById method should return matching doc in DB", () => {
    const expected = {
      name: "dailyneed",
      path: "/Users/pankajl/coding/dailyneed",
      lastModifiedAt: 1613920701988,
      _id: "1613920701988",
    };
    expect(projects.getById("1613920701988")).toMatchObject(expected);
  });

  it("getById method should return undefined is id does not match", () => {
    expect(projects.getById("161392001988")).toBeUndefined();
  });

  it("getByValue method should return matching doc in DB", () => {
    const expected = {
      name: "dailyneed",
      path: "/Users/pankajl/coding/dailyneed",
      lastModifiedAt: 1613920701988,
      _id: "1613920701988",
    };
    expect(
      projects.getByValue("path", "/Users/pankajl/coding/dailyneed")
    ).toMatchObject(expected);
  });
});
