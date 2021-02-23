module.exports = {
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "!/fixtures/**/*.js",
    "**/*.js"
  ],
  coverageThreshold: {
    global: {
      statements: 5,
      branches: 0.8,
      functions: 19,
      lines: 14,
    },
  },
};
