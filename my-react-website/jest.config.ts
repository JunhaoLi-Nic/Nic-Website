import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // Specify jest-environment-jsdom here
  roots: ['<rootDir>/src', '<rootDir>/tests','<rootDir>/node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock style imports
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@css/(.*)$": "<rootDir>/src/css/$1",
    "^@splinetool/react-spline$": 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-spline)/)' // Include the specific module if it needs to be transformed
  ]
};

export default config;
