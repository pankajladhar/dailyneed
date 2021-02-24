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
      statements: 44,
      branches: 50,
      functions: 72,
      lines: 43,
    },
  },
};
