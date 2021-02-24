const { description } = require("commander");
const jestConfig = require("../../../jest.config");
const { success, info, log } = require("./../index");

jest.spyOn(console, "log");

describe("logging", () => {
  it("log method should print in normal format", () => {
    log("some message");
    expect(console.log.mock.calls[0][0]).toBe("some message");
  });
});
