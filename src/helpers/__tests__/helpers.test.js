const {
  getSuggestions,
  getProjectNameFromPath,
  getPathForCurrentDir,
  generateUUID,
  getProjectNames,
} = require("../helpers");

describe("generateUUID", () => {
  it("should return proper UUID", () => {
    jest
      .spyOn(Date.prototype, "getTime")
      .mockImplementation(() => 1487076708000);
    const results = generateUUID();
    expect(results).toBe("1487076708000");
  });
});

describe("getProjectNames", () => {
  it("should return proper project names", () => {
    const input = {
      1613920701987: {
        name: "dailyneed",
        path: "/Users/pankajl/coding/dailyneed",
        lastModifiedAt: 1614079219299,
        _id: "1613920701987",
      },
      1614080637651: {
        name: "coding",
        path: "/Users/pankajl/codin2g",
        lastModifiedAt: 1614080637651,
        _id: "1614080637651",
      },
    };

    const expected = [
      { title: "coding", value: "1614080637651" },
      { title: "dailyneed", value: "1613920701987" },
    ];

    const results = getProjectNames(input);
    expect(results).toMatchObject(expected);
  });
});

describe("getSuggestions", () => {
  it("should return proper project names", () => {
    const input = [
      { title: "coding", value: "1614080637651" },
      { title: "dailyneed", value: "1613920701987" },
    ];

    const expected = [{ title: "coding", value: "1614080637651" }];
    const results = getSuggestions("cod", input);
    expect(results).toMatchObject(expected);
  });
});

describe("getPathForCurrentDir", () => {
  it("should return proper path", () => {
    const spy = jest.spyOn(process, "cwd");
    spy.mockReturnValue("/some/fake/path");
    expect(getPathForCurrentDir()).toBe("/some/fake/path");
  });
});

describe("getProjectNameFromPath", () => {
  it("should return proper project name", () => {
    const spy = jest.spyOn(process, "cwd");
    spy.mockReturnValue("/some/fake/project-name");
    expect(getProjectNameFromPath()).toBe("project-name");
  });
});
