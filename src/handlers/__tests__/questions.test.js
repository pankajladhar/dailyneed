const { addQuestion, addQuestionWithURL } = require("../questions");

describe("should construct proper question payload", () => {
  it("for addQuestion method", () => {
    const expected = [
      {
        name: "name",
        type: "text",
        message: "Project name :",
        initial: "initialName",
      },
    ];

    const result = addQuestion({ initialName: "initialName" });
    expect(result).toMatchObject(expected);
  });

  it("for addQuestionWithURL method", () => {
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

    const result = addQuestionWithURL({
      initialPath: "initialPath",
      initialName: "initialName",
    });
    expect(result).toMatchObject(expected);
  });
});
