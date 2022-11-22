import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message & data", () => {
    const testStatus = 400;
    const textMessage = "Test";
    const testData = { key: "value" };

    const testError = new HttpError(testStatus, textMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(textMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined as data if no data is provided", () => {
    const testStatus = 1;
    const textMessage = "Test";

    const testError = new HttpError(testStatus, textMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(textMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});
