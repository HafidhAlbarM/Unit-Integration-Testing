import { it, expect } from "vitest";
import { add } from "./math";

it("should menambahkan semua nilai angka di dalam array", () => {
  //Arrange
  const numbers = [1, 2];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should menghasilkan NAN jika ada salah satu nilai yg invalid", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should menghasilkan hasil penjumlahan yg benar jika diberikan sebuah array berisi string", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should menghasilkan 0 jika diberikan array yg kosong", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error jika tidak ada value yg dimasukan ke dalam fungsi", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error jika diberikan multiple parameter selain array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
