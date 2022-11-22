import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

// it("should add 1+2 buat pancingan", () => {
//   const a = 1;
//   const b = 2;

//   const result = a + b;

//   expect(result).toEqual(3);
// });

// Moncking digunakan utk mengetes third party/kode yg bukan kita tulis dari sebuah kode
// me-replace fs menjadi empty file function
vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "testing hafidh";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "testing hafidh";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
