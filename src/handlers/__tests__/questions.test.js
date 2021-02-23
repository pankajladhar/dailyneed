const { addProjectQuestion, addProjectQuestionWithURL } = require("../questions");

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
});
