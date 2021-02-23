module.exports = {
  collectCoverage: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "!/fixtures/**/*.js",
    "**/*.js"
  ],
  coverageThreshold: {
    global: {
      statements: 6,
      branches: 1,
      functions: 23,
      lines: 17,
    },
  },
};
