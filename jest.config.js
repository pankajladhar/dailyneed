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
      statements: 26,
      branches: 23,
      functions: 48,
      lines: 26,
    },
  },
};
