const { expect } = require("@jest/globals");
const minSubarrayLen = require("./minSubarrayLen");

const seq1 = [
  [[2, 3, 1, 4, 3], 7, 2],
  [[2, 1, 6, 5, 4], 9, 2],
  [[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 192, 1, 6, 5, 4], 52, 1],
  [[1, 4, 16, 22, 5, 7, 8, 9, 10], 39, 3],
  [[1, 4, 16, 22, 5, 7, 8, 9, 10], 55, 5],
  [[4, 3, 3, 8, 1, 2, 3], 11, 2],
  [[1, 4, 16, 22, 5, 7, 8, 9, 10], 95, 0],
];

seq1.forEach((each) => {
  test(`min elements of subarray from [${each[0]}] which >= ${each[1]} — ${each[2]}`, () => {
    expect(minSubarrayLen(each[0], each[1])).toBe(each[2]);
  });
});
