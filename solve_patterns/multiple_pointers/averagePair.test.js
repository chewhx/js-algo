const { expect } = require("@jest/globals");
const averagePair = require("./averagePair");

const seq1 = [
  [[1, 2, 3], 2.5, true],
  [[1, 3, 3, 5, 6, 7, 10, 12, 19], 8, true],
  [[-1, 0, 3, 4, 5, 6], 4.1, false],
  [[], 4, false],
];

seq1.forEach((each) => {
  test(`Are there average pairs in [${each[0]}] for ${each[1]} — ${each[2]}`, () => {
    expect(averagePair(each[0], each[1])).toBe(each[2]);
  });
});
