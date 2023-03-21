import { describe, it, expect } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
  // it('should transform a string number into a number of type number', () => {
  //   const input = '1';

  //   const result = transformToNumber(input);

  //   expect(result).toBeTypeOf('number');
  // });

  it('should transform a string number into a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yeild NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    // using an anonymous function as testing for errors
    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
