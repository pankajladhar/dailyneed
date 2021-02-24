const getQuestions = require("./../getQuestions");

const helpers = require("./../../helpers/helpers");

jest.mock("./../../helpers/helpers");

jest.spyOn(helpers, "getProjectNameFromPath");
jest.spyOn(helpers, "getSuggestions");
jest.spyOn(helpers, "getPathForCurrentDir");

describe("should return proper questions", () => {
  it("when ADD command", () => {
    helpers.getProjectNameFromPath.mockReturnValue("fake-name");
    const result = getQuestions("ADD");
    expect(result).toMatchObject([
      {
        name: "name",
        type: "text",
        initial: "fake-name",
      },
    ]);
  });

  it("when ADD_WITH_URL command", () => {
    helpers.getProjectNameFromPath.mockReturnValue("fake-name");
    helpers.getPathForCurrentDir.mockReturnValue("/some/fake-name");

    const result = getQuestions("ADD_WITH_URL");
    expect(result).toMatchObject([
      {
        name: "url",
        type: "text",
        message: `Full project path :`,
        initial: "/some/fake-name",
      },
      {
        name: "name",
        type: "text",
        initial: "fake-name",
      },
    ]);
  });

  xit("when REMOVE command", () => {
    helpers.getSuggestions.mockImplementation(() => ["s1", "s2"]);
    const result = getQuestions("REMOVE", "id");
    expect(result).toMatchObject([
      {
        name: "name",
        type: "text",
        initial: "fake-name",
      },
    ]);
  });
});
