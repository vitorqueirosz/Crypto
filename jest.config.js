module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
  moduleNameMapper: {
    ".+\\.(css|png|jpg|svg)$": "identity-obj-proxy",
  },
};
