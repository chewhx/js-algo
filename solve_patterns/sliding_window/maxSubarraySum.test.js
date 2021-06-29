const maxSubarraySum = require("./maxSubarraySum");

const seq1 = [
  [[1, 2, 5, 2, 8, 1, 5], 2, 10],
  [[1, 2, 5, 2, 8, 1, 5], 4, 17],
  [[4, 2, 1, 6], 1, 6],
  [[4, 2, 1, 6, 2], 4, 13],
  [[], 4, null],
];

seq1.forEach((each) => {
  test(`Max subarray of [${each[0]}], ${each[1]} variables — ${each[2]}`, () => {
    expect(maxSubarraySum(each[0], each[1])).toBe(each[2]);
  });
});
