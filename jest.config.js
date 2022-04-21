// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@business/(.*)$': '<rootDir>/src/controller/business/$1',
    '^@errors/(.*)$': '<rootDir>/src/controller/errors/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/controller/infrastructure/$1',
    '^@integration/(.*)$': '<rootDir>/src/controller/integration/$1',
    '^@model/(.*)$': '<rootDir>/src/controller/model/$1',
    '^@viewModel/(.*)$': '<rootDir>/src/controller/viewModel/$1',
    '^@components/(.*)$': '<rootDir>/src/core/components/$1',
    '^@decorators/(.*)$': '<rootDir>/src/core/decorators/$1',
    '^@utils/(.*)$': '<rootDir>/src/core/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/core/hooks/$1',
  },

  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
