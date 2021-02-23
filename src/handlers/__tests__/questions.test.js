const {
  addProjectQuestion,
  addProjectQuestionWithURL,
  goProjectQuestion,
  openProjectQuestion,
  removeProjectQuestion,
} = require("../questions");

describe("should construct proper question payload", () => {
  it("for addProjectQuestion method", () => {
    const expected = [
      {
        name: "name",
        type: "text",
        message: "Project name :",
        initial: "initialName",
      },
    ];

    const result = addProjectQuestion({ initialName: "initialName" });
    expect(result).toMatchObject(expected);
  });

  it("for addProjectQuestionWithURL method", () => {
    const expected = [
      {
        name: "url",
        type: "text",
        message: "Full project path :",
        initial: "initialPath",
      },
      {
        name: "name",
        type: "text",
        message: "Project name :",
        initial: "initialName",
      },
    ];

    const result = addProjectQuestionWithURL({
      initialPath: "initialPath",
      initialName: "initialName",
    });
    expect(result).toMatchObject(expected);
  });

  it("for removeProjectQuestion method", () => {
    const expected = [
      {
        type: "autocomplete",
        name: "value",
        suggest: ["s1, s2"],
        message: `Select project to remove :`,
        choices: ["d1", "d2"],
      },
    ];

    const result = removeProjectQuestion({
      suggestions: ["s1, s2"],
      data: ["d1", "d2"],
    });
    expect(result).toMatchObject(expected);
  });

  it("for goProjectQuestion method", () => {
    const expected = [
      {
        type: "autocomplete",
        name: "value",
        suggest: ["s1, s2"],
        message: `Select project to go to :`,
        choices: ["d1", "d2"],
      },
    ];

    const result = goProjectQuestion({
      suggestions: ["s1, s2"],
      data: ["d1", "d2"],
    });
    expect(result).toMatchObject(expected);
  });

  it("for openProjectQuestion method", () => {
    const expected = [
      {
        type: "autocomplete",
        name: "value",
        suggest: ["s1, s2"],
        message: `Select project to open in editor :`,
        choices: ["d1", "d2"],
      },
    ];

    const result = openProjectQuestion({
      suggestions: ["s1, s2"],
      data: ["d1", "d2"],
    });
    expect(result).toMatchObject(expected);
  });
});
