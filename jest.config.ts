import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default createJestConfig(config);
