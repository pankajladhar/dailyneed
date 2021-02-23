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
      statements: 33,
      branches: 40,
      functions: 54,
      lines: 33,
    },
  },
};
