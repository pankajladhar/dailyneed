module.exports = {
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  collectCoverageFrom: ["**/*.js"],
  coverageThreshold: {
    global: {
      statements: 84.31,
      branches: 73.97,
      functions: 86.42,
      lines: 84.33,
    },
  },
};
