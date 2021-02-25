module.exports = {
  collectCoverage: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "!/fixtures/**/*.js",
    "src/**/*.js",
  ],
  coverageThreshold: {
    global: {
      statements: 41,
      branches: 41,
      functions: 69,
      lines: 41,
    },
  },
};
