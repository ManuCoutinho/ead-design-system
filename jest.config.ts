export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.(spec|test).ts'],
  collectCoverage: true,
  moduleNameMapper: {
    '^@/tests/(.*)': '<rootDir>/tests/$1',
    '^@/(.*)': '<rootDir>/src/$1'

  },
  coveragePathIgnorePatterns: ['dist'],


}