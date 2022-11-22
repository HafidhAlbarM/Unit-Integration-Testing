import { beforeEach, describe, expect, it } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "test title";
const testContent = "test content";
let testFormData;

describe("extractProstData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it("should extract title and content from provided form data", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
