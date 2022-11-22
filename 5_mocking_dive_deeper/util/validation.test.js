import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if empty string is provided oas a value", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("should throw an error if empty string is provided oas a value", () => {
  const testInput = "  ";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("should throw an error with the provided error message if an aerror if thrown", () => {
  const testInput = "  ";
  const testErrorMessage = "Test";

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
