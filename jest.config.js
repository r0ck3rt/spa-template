module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest/setup.ts', 'jest-localstorage-mock'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'test-utils': '<rootDir>/jest/test-utils',
  },
  globals: {
    'ts-jest': {},
  },
  cacheDirectory: '.jest/cache',
};
