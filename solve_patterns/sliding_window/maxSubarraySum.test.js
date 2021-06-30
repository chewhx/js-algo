const maxSubarraySum = require("./maxSubarraySum");

const seq1 = [
  [[1, 2, 5, 2, 8, 1, 5], 2, 10],
  [[1, 2, 5, 2, 8, 1, 5], 4, 17],
  [[4, 2, 1, 6], 1, 6],
  [[4, 2, 1, 6, 2], 4, 13],
  [[], 4, null],
  [[100, 200, 300, 400], 2, 700],
  [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39],
  [[-3, 4, 0, -2, 6, -1], 2, 5],
  [[3, -2, 7, -4, , 1, -1, 4, -2, 1], 2, 5],
  [[2, 3], 3, null],
];

seq1.forEach((each) => {
  test(`Max subarray of [${each[0]}], ${each[1]} variables — ${each[2]}`, () => {
    expect(maxSubarraySum(each[0], each[1])).toBe(each[2]);
  });
});
