import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it('should yeild NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = ['invalid', 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it('should yeild a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1', '2'];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it('should yeild 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('should throw and error if no value is passed into the function', () => {
  const resultFunction = () => {
    add();
  };
  expect(resultFunction).toThrow();
});

it('should throw an error if provided with multiple arguments rather than an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFunction = () => {
    add(num1, num2);
  };

  expect(resultFunction).toThrow();
});
