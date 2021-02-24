module.exports = {
  collectCoverage: false,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "!/fixtures/**/*.js",
    "src/**/*.js",
  ],
  coverageThreshold: {
    global: {
      statements: 39,
      branches: 40,
      functions: 71,
      lines: 38,
    },
  },
};
